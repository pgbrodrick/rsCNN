from typing import Tuple

import keras
from keras.layers import BatchNormalization, Conv2D


DEFAULT_BLOCK_STRUCTURE = (2, 2, 2, 2)
DEFAULT_FILTERS = 64
DEFAULT_KERNEL_SIZE = (3, 3)
DEFAULT_PADDING = 'same'
DEFAULT_USE_BATCH_NORM = True
DEFAULT_USE_INITIAL_COLORSPACE_TRANSFORMATION_LAYER = False


def parse_architecture_options(**kwargs):
    return {
        'block_structure': kwargs.get('block_structure', DEFAULT_BLOCK_STRUCTURE),
        'filters': kwargs.get('filters', DEFAULT_FILTERS),
        'kernel_size': kwargs.get('kernel_size', DEFAULT_KERNEL_SIZE),
        'padding': kwargs.get('padding', DEFAULT_PADDING),
        'use_batch_norm': kwargs.get('use_batch_norm', DEFAULT_USE_BATCH_NORM),
        'use_initial_colorspace_transformation_layer':
            kwargs.get('use_initial_colorspace_transformation_layer',
                       DEFAULT_USE_INITIAL_COLORSPACE_TRANSFORMATION_LAYER)
    }


def create_model(
        inshape: Tuple[int, int, int],
        n_classes: int,
        output_activation: str,
        block_structure: Tuple[int, ...] = DEFAULT_BLOCK_STRUCTURE,
        filters: int = DEFAULT_FILTERS,
        kernel_size: Tuple[int, int] = DEFAULT_KERNEL_SIZE,
        padding: str = DEFAULT_PADDING,
        use_batch_norm: bool = DEFAULT_USE_BATCH_NORM,
        use_initial_colorspace_transformation_layer: bool = DEFAULT_USE_INITIAL_COLORSPACE_TRANSFORMATION_LAYER
) -> keras.models.Model:

    # Initial convolution
    inlayer = keras.layers.Input(shape=inshape)

    if use_initial_colorspace_transformation_layer:
        intermediate_color_depth = int(inshape[-1] ** 2)
        conv = Conv2D(filters=intermediate_color_depth, kernel_size=(1, 1), padding='same')(inlayer)
        conv = Conv2D(filters=inshape[-1], kernel_size=(1, 1), padding='same')(conv)
        conv = BatchNormalization()(conv)
    else:
        conv = Conv2D(filters=filters, kernel_size=kernel_size, padding=padding)(inlayer)

    # Iterate blocks and subblocks
    subblock_input = conv
    for idx_block, num_subblocks in enumerate(block_structure):
        for idx_sublayer in range(num_subblocks):
            subblock = subblock_input
            if use_batch_norm:
                subblock = BatchNormalization()(subblock)
            subblock = Conv2D(filters=filters, kernel_size=kernel_size, padding=padding)(subblock)
            subblock_input = _add_residual_shortcut(subblock_input, subblock)
        filters *= 2

    # Output convolutions
    output_layer = subblock_input
    if use_batch_norm:
        output_layer = BatchNormalization()(output_layer)
    output_layer = Conv2D(
        filters=n_classes, kernel_size=(1, 1), padding='same', activation=output_activation)(output_layer)
    return keras.models.Model(inputs=[inlayer], outputs=[output_layer])


def _add_residual_shortcut(input_layer: keras.layers.Layer, residual_module: keras.layers.Layer):
    """
    Adds a shortcut connection by combining a input tensor and residual module
    """
    shortcut = input_layer

    # We need to apply a convolution if the input and block shapes do not match, every block transition
    inshape = keras.backend.int_shape(input_layer)[1:]
    residual_shape = keras.backend.int_shape(residual_module)[1:]
    if inshape != residual_shape:
        strides = (int(round(inshape[0] / residual_shape[0])), int(round(inshape[1] / residual_shape[1])))
        shortcut = Conv2D(
            filters=residual_shape[-1], kernel_size=(1, 1), padding='valid', strides=strides)(shortcut)

    return keras.layers.add([shortcut, residual_module])