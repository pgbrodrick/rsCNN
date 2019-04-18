from typing import List

from matplotlib import gridspec
import matplotlib.pyplot as plt

from rsCNN.evaluation import samples


_FIGSIZE_CONSTANT = 30


def get_figure_and_grid(nrows, ncols):
    width = _FIGSIZE_CONSTANT * ncols / (ncols + nrows)
    height = _FIGSIZE_CONSTANT * nrows / (ncols + nrows)
    fig = plt.figure(figsize=(width, height))
    grid = gridspec.GridSpec(nrows, ncols)
    return fig, grid


def get_axis_iterator_for_sample_row(grid, idx_sample):
    num_cols = grid.get_geometry()[1]
    return iter([plt.subplot(grid[idx_sample, idx_col]) for idx_col in range(num_cols)])


def plot_figures_iterating_through_samples_features_responses(
        sampled: samples.Samples,
        plotter: callable,
        max_pages: int = 8,
        max_samples_per_page: int = 10,
        max_features_per_page: int = 5,
        max_responses_per_page: int = 5
) -> List[plt.Figure]:
    # TODO:  Phil:  how do you feel about restricting features and responses to being on separate pages? It'd slightly
    #  simplify the API and make it more general. I think this only applies to the input page right now.
    figures = []
    idx_current_sample = 0
    idx_current_feature = 0
    idx_current_response = 0
    while idx_current_sample < sampled.num_samples and len(figures) < max_pages:
        idx_last_sample = min(sampled.num_samples, idx_current_sample + max_samples_per_page)
        range_samples = range(idx_current_sample, idx_last_sample)
        while idx_current_feature < sampled.num_features:
            idx_last_feature = min(sampled.num_features, idx_current_feature + max_features_per_page)
            range_features = range(idx_current_feature, idx_last_feature)
            idx_last_response = min(sampled.num_responses, idx_current_response + max_responses_per_page)
            range_responses = range(idx_current_response, idx_last_response)
            fig = plotter(sampled, range_samples, range_features, range_responses)
            figures.append(fig)
            idx_current_feature = min(sampled.num_features, idx_current_feature + max_features_per_page)
            idx_current_response = min(sampled.num_responses, idx_current_response + max_responses_per_page)
        idx_current_sample = min(sampled.num_samples, idx_current_sample + max_samples_per_page)
    return figures
