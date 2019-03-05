import keras

from keras.layers.convolutional import Conv2D, MaxPooling2D, UpSampling2D
from keras.layers.normalization import BatchNormalization

from src.util.general import *



class network_config:
  def __init__(self,inshape,n_classes):
    self.inshape = inshape
    self.n_classes = n_classes

    self.option = {}
   
  def fill_default_option(keyword,value):
    """ Helper function to fill in option dictionary with a value
        if it is not already populatedd     Arguments:
    key - str
      Key to search dictionary for.
    value - value
      Value to fill if no existing value for key
  
    Returns:
      None
    """
    if (key not in option):
      return self.option[key] = value


def flex_unet(network_config):
    """ Construct a U-net style network with flexible shape based on
        a network_config class

    Arguments:
    network_config - custom class
      Designate configuraiton information about the network in question.
    """

    # Update potentially non-standard network parameters
    network_config.fill_default_option('conv_depth',16)
    network_config.fill_default_option('batch_norm',False)

    # Return a call to the argument-specific version of flex_unet
    return flex_unet(network_config.inshape,
                     network_config.n_classes,
                     network_config['conv_depth'],
                     network_config['batch_norm']):


def flat_regress_net(network_config):
    """ Construct a flat style network with flexible shape using
        a network_config class

    Arguments:
    network_config - custom class
      Designate configuraiton information about the network in question.
    """

    # Update potentially non-standard network parameters
    network_config.fill_default_option('conv_depth',16)
    network_config.fill_default_option('batch_norm',False)
    network_config.fill_default_option('n_layers',8)
    network_config.fill_default_option('conv_pattern',[3])
    network_config.fill_default_option('output_activation','softmax')

    # Return a call to the argument-specific version of flex_unet
    return flex_unet(network_config.inshape,
                     network_config.n_classes,
                     network_config['conv_depth'],
                     network_config['batch_norm'],
                     network_config['n_layers'],
                     network_config['conv_pattern'],
                     network_config['output_activation']):



def flex_unet(inshape, n_classes, conv_depth, batch_norm):
    """ Construct a U-net style network with flexible shape

    Arguments:
    inshape - tuple/list
      Designates the input shape of an image to be passed to
      the network.
    n_classes - int
      The number of classes the network is meant to classify.
    conv_depth - int/str
      If integer, a fixed number of convolution filters to use
      in the network.  If 'growth' tells the network to grow
      in depth to maintain a constant number of neurons.
    batch_norm - bool
      Whether or not to use batch normalization after each layer.

    Returns:
      A U-net style network keras network.
    """
    inlayer = keras.layers.Input(inshape)
    growth_flag = False
    if (conv_depth == 'growth'):
      growth_flag = True
      conv_depth = 8

    # get width 
    width = inshape[1]

    pool_list = []
    pre_pool_list = []
    b1 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(inlayer)

    # encoding layers
    if (batch_norm): b1 = BatchNormalization()(b1)
    pre_pool_list.append(Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(b1))
    pool_list.append(MaxPooling2D(pool_size=(2, 2))(pre_pool_list[-1]))
    if (batch_norm): pool_list.append(BatchNormalization()(pool_list[-1]))
    if(growth_flag): conv_depth=int(2*conv_depth)

    n_encode = 1
    while width > 8:
        b2 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(pool_list[-1])
        if (batch_norm): b2 = BatchNormalization()(b2)
        pre_pool_list.append(Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(b2))
        pool_list.append(MaxPooling2D(pool_size=(2, 2))(pre_pool_list[-1]))
        if (batch_norm): pool_list.append(BatchNormalization()(pool_list[-1]))
        n_encode += 1
        width = rint(width / 2.)
        if(growth_flag): conv_depth=int(2*conv_depth)

    # decoding layers
    last_layer = pool_list[-1]
    for n in range(0, n_encode):

        b2 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(last_layer)
        if (batch_norm): b2 = BatchNormalization()(b2)
        b2 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(b2)
        if (batch_norm): b2 = BatchNormalization()(b2)

        u1 = UpSampling2D(size=(2, 2))(b2)
        u1 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(u1)
        if (batch_norm): u1 = BatchNormalization()(u1)
        last_layer = keras.layers.Concatenate()([pre_pool_list[n_encode-1-n], u1])
        if(growth_flag): conv_depth=int(conv_depth/2)

    e1 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(last_layer)
    if (batch_norm): e1 = BatchNormalization()(e1)
    e2 = Conv2D(conv_depth, (3, 3), activation='relu', padding='same')(e1)
    if (batch_norm): e2 = BatchNormalization()(e2)

    output_layer = Conv2D(n_classes, (1, 1), activation='softmax', padding='same')(e2)
    model = keras.models.Model(input = inlayer , output=output_layer)
    return model


##### Networks #####
def flat_regress_net(inshape, n_classes, conv_depth, batch_norm, n_layers, conv_pattern, output_activation):
    """ Construct a flat style network with flexible shape

    Arguments:
    inshape - tuple/list
      Designates the input shape of an image to be passed to
      the network.
    n_classes - int
      The number of classes the network is meant to regress
    kwargs - dict
      A dictionary of optional keyword arguments, which may contain
      extra keywords.  Values to use are:

      conv_depth - int/str
        If integer, a fixed number of convolution filters to use
        in the network.  If 'growth' tells the network to grow
        in depth to maintain a constant number of neurons.
      batch_norm - bool
        Whether or not to use batch normalization after each layer.

    Returns:
      A flexible flat style network keras network.
    """
    if (len(conv_pattern) > 0):
      if (n_layers % len(conv_pattern) != 0):
        Exception('conv_pattern must divide into n_layers')
        quit()

    if (isinstance(conv_depth,int) == False):
      Exception('conv_depth parameter must be an integer')
      quit()

    inlayer = keras.layers.Input(inshape)
    b1 = inlayer
    for i in range(n_layers): 
      b1 = Conv2D(conv_depth, (conv_pattern[i%len(conv_pattern)], conv_pattern[i%len(conv_pattern)]), activation='relu', padding='same')(b1)
      b1 = Conv2D(conv_depth, (conv_pattern[i%len(conv_pattern)], conv_pattern[i%len(conv_pattern)]), activation='relu', padding='same')(b1)
      if (batch_norm): b1 = BatchNormalization()(b1)


    output_layer = Conv2D(n_classes, (1, 1), activation=output_activation, padding='same')(b1)
    model = keras.models.Model(input = inlayer , output=output_layer)
    return model











def get_network(net_name,inshape,n_classes,kwargs={}):
  """ Helper function to return the appropriate network.
  
  Arguments:
  net_name - str
    Name of the network to fetch.  Options are:
      flex_unet - a flexible, U-net style network.
  inshape - tuple/list
    Designates the input shape of an image to be passed to
    the network.
  n_classes - int
    The number of classes the network is meant to classify.
  kwargs - dict
    An optional dictionary of extra keywords for different networks.

  Returns:
    A Keras network in the designated style.
  """
  if (net_name == 'flex_unet'):
    return flex_unet(inshape,n_classes,kwargs)
  else:
    raise NotImplementedError('Unknown network name')













