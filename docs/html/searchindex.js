Search.setIndex({docnames:["index","rsCNN","rsCNN.architectures","rsCNN.architectures.alex_net","rsCNN.architectures.config_sections","rsCNN.architectures.dense_flat_net","rsCNN.architectures.dense_unet","rsCNN.architectures.dilation_net","rsCNN.architectures.flat_net","rsCNN.architectures.residual_dilation_net","rsCNN.architectures.residual_flat_net","rsCNN.architectures.residual_unet","rsCNN.architectures.unet","rsCNN.configuration","rsCNN.configuration.check_config_parameters_not_obsolete","rsCNN.configuration.configs","rsCNN.configuration.sections","rsCNN.data_management","rsCNN.data_management.apply_model_to_data","rsCNN.data_management.common_io","rsCNN.data_management.data_core","rsCNN.data_management.ooc_functions","rsCNN.data_management.scalers","rsCNN.data_management.sequences","rsCNN.data_management.training_data","rsCNN.evaluation","rsCNN.evaluation.comparisons","rsCNN.evaluation.histories","rsCNN.evaluation.inputs","rsCNN.evaluation.networks","rsCNN.evaluation.results","rsCNN.evaluation.samples","rsCNN.evaluation.shared","rsCNN.evaluation.shared.colormaps","rsCNN.evaluation.shared.figures","rsCNN.evaluation.shared.subplots","rsCNN.experiments","rsCNN.experiments.callbacks","rsCNN.experiments.experiments","rsCNN.experiments.histories","rsCNN.experiments.losses","rsCNN.experiments.models","rsCNN.utils","rsCNN.utils.general","rsCNN.utils.gpus","rsCNN.utils.logging"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","rsCNN.rst","rsCNN.architectures.rst","rsCNN.architectures.alex_net.rst","rsCNN.architectures.config_sections.rst","rsCNN.architectures.dense_flat_net.rst","rsCNN.architectures.dense_unet.rst","rsCNN.architectures.dilation_net.rst","rsCNN.architectures.flat_net.rst","rsCNN.architectures.residual_dilation_net.rst","rsCNN.architectures.residual_flat_net.rst","rsCNN.architectures.residual_unet.rst","rsCNN.architectures.unet.rst","rsCNN.configuration.rst","rsCNN.configuration.check_config_parameters_not_obsolete.rst","rsCNN.configuration.configs.rst","rsCNN.configuration.sections.rst","rsCNN.data_management.rst","rsCNN.data_management.apply_model_to_data.rst","rsCNN.data_management.common_io.rst","rsCNN.data_management.data_core.rst","rsCNN.data_management.ooc_functions.rst","rsCNN.data_management.scalers.rst","rsCNN.data_management.sequences.rst","rsCNN.data_management.training_data.rst","rsCNN.evaluation.rst","rsCNN.evaluation.comparisons.rst","rsCNN.evaluation.histories.rst","rsCNN.evaluation.inputs.rst","rsCNN.evaluation.networks.rst","rsCNN.evaluation.results.rst","rsCNN.evaluation.samples.rst","rsCNN.evaluation.shared.rst","rsCNN.evaluation.shared.colormaps.rst","rsCNN.evaluation.shared.figures.rst","rsCNN.evaluation.shared.subplots.rst","rsCNN.experiments.rst","rsCNN.experiments.callbacks.rst","rsCNN.experiments.experiments.rst","rsCNN.experiments.histories.rst","rsCNN.experiments.losses.rst","rsCNN.experiments.models.rst","rsCNN.utils.rst","rsCNN.utils.general.rst","rsCNN.utils.gpus.rst","rsCNN.utils.logging.rst"],objects:{"":{rsCNN:[1,0,0,"-"]},"rsCNN.architectures":{alex_net:[3,0,0,"-"],config_sections:[4,0,0,"-"],dense_flat_net:[5,0,0,"-"],dense_unet:[6,0,0,"-"],dilation_net:[7,0,0,"-"],flat_net:[8,0,0,"-"],get_available_architectures:[2,2,1,""],residual_dilation_net:[9,0,0,"-"],residual_flat_net:[10,0,0,"-"],residual_unet:[11,0,0,"-"],unet:[12,0,0,"-"]},"rsCNN.architectures.alex_net":{ArchitectureConfigSection:[3,1,1,""],create_model:[3,2,1,""]},"rsCNN.architectures.config_sections":{AutoencoderMixin:[4,1,1,""],BaseArchitectureConfigSection:[4,1,1,""],BlockMixin:[4,1,1,""],DEFAULT_BLOCK_STRUCTURE:[4,5,1,""],DEFAULT_DILATION_RATE:[4,5,1,""],DEFAULT_FILTERS:[4,5,1,""],DEFAULT_KERNEL_SIZE:[4,5,1,""],DEFAULT_MIN_CONV_WIDTH:[4,5,1,""],DEFAULT_NUM_LAYERS:[4,5,1,""],DEFAULT_PADDING:[4,5,1,""],DEFAULT_POOL_SIZE:[4,5,1,""],DEFAULT_USE_BATCH_NORM:[4,5,1,""],DEFAULT_USE_GROWTH:[4,5,1,""],DEFAULT_USE_INITIAL_COLORSPACE_TRANSFORMATION_LAYER:[4,5,1,""],DilationMixin:[4,1,1,""],FlatMixin:[4,1,1,""],GrowthMixin:[4,1,1,""],create_model_from_architecture_config_section:[4,2,1,""],get_architecture_config_section:[4,2,1,""]},"rsCNN.architectures.config_sections.AutoencoderMixin":{min_conv_width:[4,3,1,""],pool_size:[4,3,1,""]},"rsCNN.architectures.config_sections.BaseArchitectureConfigSection":{filters:[4,3,1,""],get_option_keys:[4,4,1,""],inshape:[4,3,1,""],kernel_size:[4,3,1,""],n_classes:[4,3,1,""],output_activation:[4,3,1,""],padding:[4,3,1,""],use_batch_norm:[4,3,1,""],use_initial_colorspace_transformation_layer:[4,3,1,""]},"rsCNN.architectures.config_sections.BlockMixin":{block_structure:[4,3,1,""]},"rsCNN.architectures.config_sections.DilationMixin":{dilation_rate:[4,3,1,""]},"rsCNN.architectures.config_sections.FlatMixin":{num_layers:[4,3,1,""]},"rsCNN.architectures.config_sections.GrowthMixin":{use_growth:[4,3,1,""]},"rsCNN.architectures.dense_flat_net":{ArchitectureConfigSection:[5,1,1,""],create_model:[5,2,1,""]},"rsCNN.architectures.dense_unet":{ArchitectureConfigSection:[6,1,1,""],create_model:[6,2,1,""]},"rsCNN.architectures.dilation_net":{ArchitectureConfigSection:[7,1,1,""],DEFAULT_DILATION_RATE:[7,5,1,""],DEFAULT_NUM_LAYERS:[7,5,1,""],create_model:[7,2,1,""]},"rsCNN.architectures.flat_net":{ArchitectureConfigSection:[8,1,1,""],create_model:[8,2,1,""]},"rsCNN.architectures.residual_dilation_net":{ArchitectureConfigSection:[9,1,1,""],create_model:[9,2,1,""]},"rsCNN.architectures.residual_flat_net":{ArchitectureConfigSection:[10,1,1,""],create_model:[10,2,1,""]},"rsCNN.architectures.residual_unet":{ArchitectureConfigSection:[11,1,1,""],create_model:[11,2,1,""]},"rsCNN.architectures.unet":{ArchitectureConfigSection:[12,1,1,""],create_model:[12,2,1,""]},"rsCNN.configuration":{DEFAULT_OPTIONAL_VALUE:[13,5,1,""],DEFAULT_REQUIRED_VALUE:[13,5,1,""],check_config_parameters_not_obsolete:[14,0,0,"-"],configs:[15,0,0,"-"],sections:[16,0,0,"-"]},"rsCNN.configuration.check_config_parameters_not_obsolete":{check_config_parameters_not_obsolete:[14,2,1,""]},"rsCNN.configuration.configs":{Config:[15,1,1,""],DEFAULT_FILENAME_CONFIG:[15,5,1,""],create_config_from_file:[15,2,1,""],create_config_template:[15,2,1,""],get_config_differences:[15,2,1,""],save_config_to_file:[15,2,1,""]},"rsCNN.configuration.configs.Config":{architecture:[15,3,1,""],callback_early_stopping:[15,3,1,""],callback_general:[15,3,1,""],callback_reduced_learning_rate:[15,3,1,""],callback_tensorboard:[15,3,1,""],data_build:[15,3,1,""],data_samples:[15,3,1,""],get_config_as_dict:[15,4,1,""],get_config_errors:[15,4,1,""],get_human_readable_config_errors:[15,4,1,""],model_training:[15,3,1,""],raw_files:[15,3,1,""]},"rsCNN.configuration.sections":{BaseConfigSection:[16,1,1,""],CallbackEarlyStopping:[16,1,1,""],CallbackGeneral:[16,1,1,""],CallbackReducedLearningRate:[16,1,1,""],CallbackTensorboard:[16,1,1,""],DataBuild:[16,1,1,""],DataSamples:[16,1,1,""],ModelTraining:[16,1,1,""],RawFiles:[16,1,1,""],get_config_sections:[16,2,1,""]},"rsCNN.configuration.sections.BaseConfigSection":{check_config_validity:[16,4,1,""],get_config_name_as_snake_case:[16,4,1,""],get_config_options_as_dict:[16,4,1,""],get_option_keys:[16,4,1,""],set_config_options:[16,4,1,""]},"rsCNN.configuration.sections.CallbackEarlyStopping":{min_delta:[16,3,1,""],patience:[16,3,1,""],use_callback:[16,3,1,""]},"rsCNN.configuration.sections.CallbackGeneral":{checkpoint_periods:[16,3,1,""],use_terminate_on_nan:[16,3,1,""]},"rsCNN.configuration.sections.CallbackReducedLearningRate":{factor:[16,3,1,""],min_delta:[16,3,1,""],patience:[16,3,1,""],use_callback:[16,3,1,""]},"rsCNN.configuration.sections.CallbackTensorboard":{histogram_freq:[16,3,1,""],update_freq:[16,3,1,""],use_callback:[16,3,1,""],write_grads:[16,3,1,""],write_graph:[16,3,1,""],write_images:[16,3,1,""]},"rsCNN.configuration.sections.DataBuild":{dir_out:[16,3,1,""],feature_mean_centering:[16,3,1,""],feature_nodata_maximum_fraction:[16,3,1,""],filename_prefix_out:[16,3,1,""],loss_window_radius:[16,3,1,""],max_built_data_gb:[16,3,1,""],max_samples:[16,3,1,""],number_folds:[16,3,1,""],random_seed:[16,3,1,""],response_background_value:[16,3,1,""],response_data_format:[16,3,1,""],response_max_value:[16,3,1,""],response_min_value:[16,3,1,""],test_fold:[16,3,1,""],validation_fold:[16,3,1,""],window_radius:[16,3,1,""]},"rsCNN.configuration.sections.DataSamples":{apply_random_transformations:[16,3,1,""],batch_size:[16,3,1,""],feature_nodata_encoding:[16,3,1,""],feature_scaler_names:[16,3,1,""],response_scaler_names:[16,3,1,""]},"rsCNN.configuration.sections.ModelTraining":{architecture_name:[16,3,1,""],assert_gpu:[16,3,1,""],dir_out:[16,3,1,""],loss_metric:[16,3,1,""],max_epochs:[16,3,1,""],optimizer:[16,3,1,""],verbosity:[16,3,1,""],weighted:[16,3,1,""]},"rsCNN.configuration.sections.RawFiles":{boundary_bad_value:[16,3,1,""],boundary_files:[16,3,1,""],feature_data_type:[16,3,1,""],feature_files:[16,3,1,""],feature_nodata_value:[16,3,1,""],ignore_projections:[16,3,1,""],response_data_type:[16,3,1,""],response_files:[16,3,1,""],response_nodata_value:[16,3,1,""]},"rsCNN.data_management":{common_io:[19,0,0,"-"],data_core:[20,0,0,"-"],ooc_functions:[21,0,0,"-"],scalers:[22,0,0,"-"],sequences:[23,0,0,"-"],training_data:[24,0,0,"-"]},"rsCNN.data_management.common_io":{get_all_interior_extent_subset_pixel_locations:[19,2,1,""],get_boundary_sets_from_boundary_files:[19,2,1,""],get_overlapping_extent:[19,2,1,""],get_site_boundary_set:[19,2,1,""],read_map_subset:[19,2,1,""],upper_left_pixel:[19,2,1,""]},"rsCNN.data_management.data_core":{Data_Container:[20,1,1,""],create_built_data_output_directory:[20,2,1,""],get_built_data_config_filepath:[20,2,1,""],get_built_data_filepaths:[20,2,1,""],get_built_features_filepaths:[20,2,1,""],get_built_responses_filepaths:[20,2,1,""],get_built_weights_filepaths:[20,2,1,""],get_memmap_basename:[20,2,1,""],get_temporary_data_filepaths:[20,2,1,""],get_temporary_features_filepath:[20,2,1,""],get_temporary_responses_filepath:[20,2,1,""],get_temporary_weights_filepath:[20,2,1,""]},"rsCNN.data_management.data_core.Data_Container":{build_or_load_scalers:[20,4,1,""],check_input_files:[20,4,1,""],config:[20,3,1,""],feature_band_types:[20,3,1,""],feature_raw_band_types:[20,3,1,""],feature_scalers:[20,3,1,""],features:[20,3,1,""],get_band_types:[20,4,1,""],response_band_types:[20,3,1,""],response_raw_band_types:[20,3,1,""],response_scalers:[20,3,1,""],responses:[20,3,1,""],train_folds:[20,3,1,""],training_sequence:[20,3,1,""],validation_sequence:[20,3,1,""],weights:[20,3,1,""]},"rsCNN.data_management.ooc_functions":{one_hot_encode_array:[21,2,1,""],permute_array:[21,2,1,""]},"rsCNN.data_management.scalers":{BaseGlobalScaler:[22,1,1,""],BaseSklearnScaler:[22,1,1,""],ConstantScaler:[22,1,1,""],MinMaxScaler:[22,1,1,""],NullScaler:[22,1,1,""],PowerScaler:[22,1,1,""],QuantileUniformScaler:[22,1,1,""],RobustScaler:[22,1,1,""],StandardScaler:[22,1,1,""],check_scaler_exists:[22,2,1,""],get_scaler:[22,2,1,""]},"rsCNN.data_management.scalers.BaseGlobalScaler":{fit:[22,4,1,""],fit_transform:[22,4,1,""],inverse_transform:[22,4,1,""],load:[22,4,1,""],save:[22,4,1,""],savename:[22,3,1,""],scaler_name:[22,3,1,""],transform:[22,4,1,""]},"rsCNN.data_management.scalers.BaseSklearnScaler":{inverse_transform:[22,4,1,""],load:[22,4,1,""],save:[22,4,1,""],scaler:[22,3,1,""],transform:[22,4,1,""]},"rsCNN.data_management.scalers.ConstantScaler":{constant_offset:[22,3,1,""],constant_scaler:[22,3,1,""],inverse_transform:[22,4,1,""],load:[22,4,1,""],save:[22,4,1,""],transform:[22,4,1,""]},"rsCNN.data_management.scalers.NullScaler":{inverse_transform:[22,4,1,""],load:[22,4,1,""],save:[22,4,1,""],transform:[22,4,1,""]},"rsCNN.data_management.sequences":{BaseSequence:[23,1,1,""],MemmappedSequence:[23,1,1,""],build_memmapped_sequence:[23,2,1,""]},"rsCNN.data_management.sequences.BaseSequence":{apply_random_transforms:[23,3,1,""],feature_scaler:[23,3,1,""],get_raw_and_transformed_sample:[23,4,1,""],response_scaler:[23,3,1,""]},"rsCNN.data_management.training_data":{build_or_load_rawfile_data:[24,2,1,""],build_training_data_from_response_points:[24,2,1,""],build_training_data_ordered:[24,2,1,""],calculate_categorical_weights:[24,2,1,""],check_projections:[24,2,1,""],check_resolutions:[24,2,1,""],get_proj:[24,2,1,""],rasterize_vector:[24,2,1,""],read_labeling_chunk:[24,2,1,""],read_mask_chunk:[24,2,1,""],read_segmentation_chunk:[24,2,1,""]},"rsCNN.evaluation":{comparisons:[26,0,0,"-"],create_model_comparison_report:[25,2,1,""],create_model_report:[25,2,1,""],create_model_report_from_experiment:[25,2,1,""],create_preliminary_model_report:[25,2,1,""],create_preliminary_model_report_from_experiment:[25,2,1,""],histories:[27,0,0,"-"],inputs:[28,0,0,"-"],networks:[29,0,0,"-"],results:[30,0,0,"-"],samples:[31,0,0,"-"],shared:[32,0,0,"-"]},"rsCNN.evaluation.comparisons":{plot_model_loss_comparison:[26,2,1,""],plot_model_timing_comparison:[26,2,1,""],walk_directories_for_model_histories:[26,2,1,""]},"rsCNN.evaluation.histories":{plot_history:[27,2,1,""]},"rsCNN.evaluation.inputs":{plot_raw_and_transformed_input_samples:[28,2,1,""]},"rsCNN.evaluation.networks":{plot_network_feature_progression:[29,2,1,""],print_model_summary:[29,2,1,""]},"rsCNN.evaluation.results":{plot_confusion_matrix:[30,2,1,""],plot_raw_and_transformed_prediction_samples:[30,2,1,""],plot_spatial_categorical_error:[30,2,1,""],plot_spatial_regression_error:[30,2,1,""],print_classification_report:[30,2,1,""],single_sequence_prediction_histogram:[30,2,1,""]},"rsCNN.evaluation.samples":{Samples:[31,1,1,""]},"rsCNN.evaluation.samples.Samples":{config:[31,3,1,""],data_sequence:[31,3,1,""],data_sequence_label:[31,3,1,""],has_features_transform:[31,3,1,""],has_responses_transform:[31,3,1,""],model:[31,3,1,""],num_features:[31,3,1,""],num_responses:[31,3,1,""],num_samples:[31,3,1,""],raw_features:[31,3,1,""],raw_features_range:[31,3,1,""],raw_predictions:[31,3,1,""],raw_predictions_range:[31,3,1,""],raw_responses:[31,3,1,""],raw_responses_range:[31,3,1,""],trans_features:[31,3,1,""],trans_features_range:[31,3,1,""],trans_predictions:[31,3,1,""],trans_predictions_range:[31,3,1,""],trans_responses:[31,3,1,""],trans_responses_range:[31,3,1,""],weights:[31,3,1,""],weights_range:[31,3,1,""]},"rsCNN.evaluation.shared":{colormaps:[33,0,0,"-"],figures:[34,0,0,"-"],subplots:[35,0,0,"-"]},"rsCNN.evaluation.shared.colormaps":{COLORMAP_CATEGORICAL:[33,5,1,""],COLORMAP_ERROR:[33,5,1,""],COLORMAP_METRICS:[33,5,1,""],COLORMAP_WEIGHTS:[33,5,1,""],check_is_categorical_colormap_repeated:[33,2,1,""]},"rsCNN.evaluation.shared.figures":{get_axis_iterator_for_sample_row:[34,2,1,""],get_figure_and_grid:[34,2,1,""],plot_figures_iterating_through_samples_features_responses:[34,2,1,""]},"rsCNN.evaluation.shared.subplots":{add_internal_window_to_subplot:[35,2,1,""],plot_binary_error:[35,2,1,""],plot_max_likelihood:[35,2,1,""],plot_raw_error_regression:[35,2,1,""],plot_raw_features:[35,2,1,""],plot_raw_predictions:[35,2,1,""],plot_raw_responses:[35,2,1,""],plot_transformed_error_regression:[35,2,1,""],plot_transformed_features:[35,2,1,""],plot_transformed_predictions:[35,2,1,""],plot_transformed_responses:[35,2,1,""],plot_weights:[35,2,1,""]},"rsCNN.experiments":{callbacks:[37,0,0,"-"],experiments:[38,0,0,"-"],histories:[39,0,0,"-"],losses:[40,0,0,"-"],models:[41,0,0,"-"]},"rsCNN.experiments.callbacks":{HistoryCheckpoint:[37,1,1,""],get_model_callbacks:[37,2,1,""]},"rsCNN.experiments.callbacks.HistoryCheckpoint":{on_batch_begin:[37,4,1,""],on_batch_end:[37,4,1,""],on_epoch_begin:[37,4,1,""],on_epoch_end:[37,4,1,""],on_train_begin:[37,4,1,""],on_train_end:[37,4,1,""]},"rsCNN.experiments.experiments":{Experiment:[38,1,1,""],get_config_filepath:[38,2,1,""],get_history_filepath:[38,2,1,""],get_model_filepath:[38,2,1,""]},"rsCNN.experiments.experiments.Experiment":{build_or_load_model:[38,4,1,""],calculate_model_memory_footprint:[38,4,1,""],config:[38,3,1,""],fit_model_with_dataset:[38,4,1,""],fit_model_with_sequences:[38,4,1,""],history:[38,3,1,""],loaded_existing_history:[38,3,1,""],loaded_existing_model:[38,3,1,""],model:[38,3,1,""]},"rsCNN.experiments.histories":{DEFAULT_FILENAME_HISTORY:[39,5,1,""],combine_histories:[39,2,1,""],load_history:[39,2,1,""],save_history:[39,2,1,""]},"rsCNN.experiments.losses":{cropped_loss:[40,2,1,""]},"rsCNN.experiments.models":{DEFAULT_FILENAME_MODEL:[41,5,1,""],load_model:[41,2,1,""],save_model:[41,2,1,""]},"rsCNN.utils":{DIR_PROJECT_ROOT:[42,5,1,""],DIR_TEMPLATES:[42,5,1,""],general:[43,0,0,"-"],gpus:[44,0,0,"-"],logging:[45,0,0,"-"]},"rsCNN.utils.general":{VALUE_NO_DATA:[43,5,1,""],fill_nearest_neighbor:[43,2,1,""],scale_image:[43,2,1,""],scale_image_mean:[43,2,1,""],scale_image_mean_std:[43,2,1,""],scale_image_minmax:[43,2,1,""],scale_vector:[43,2,1,""]},"rsCNN.utils.gpus":{assert_gpu_available:[44,2,1,""],get_count_available_gpus:[44,2,1,""]},"rsCNN.utils.logging":{MAX_BYTES:[45,5,1,""],get_root_logger:[45,2,1,""]},rsCNN:{architectures:[2,0,0,"-"],configuration:[13,0,0,"-"],data_management:[17,0,0,"-"],evaluation:[25,0,0,"-"],experiments:[36,0,0,"-"],utils:[42,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:attribute","4":"py:method","5":"py:data"},terms:{"128x128":[4,40],"128x128x4":4,"3x3":4,"boolean":24,"case":22,"class":[3,4,5,6,7,8,9,10,11,12,15,16,20,22,23,27,30,31,37,38],"default":[15,38],"final":[4,16],"float":[16,38],"function":[16,21,23,24,40,41],"int":[4,16,38,40,44],"new":[16,39],"return":[2,3,4,5,6,7,8,9,10,11,12,15,16,19,20,21,22,23,24,25,26,27,28,29,30,34,35,37,38,39,40,41,43,44,45],"true":[16,19,40],The:[4,16,24,40,43],There:4,Use:16,_site:19,a_fil:24,abov:16,activ:4,adam:16,add_internal_window_to_subplot:35,add_xlabel:35,add_ylabel:35,after:4,afterward:22,agument:43,alex_net:[1,2],all:[4,15,16,20],alreadi:37,also:45,ani:16,appear:45,append:[39,40],appli:[16,43],applic:[4,22,44],apply_model_to_data:[1,17],apply_random_transform:[16,23],approach:43,architectur:[0,1,15,16],architecture_config_sect:4,architecture_nam:[4,15,16],architectureconfigsect:[3,5,6,7,8,9,10,11,12],area:16,argument:[24,43],around:40,arrai:[4,16,21,22,23,24,40,43],asnerlab:42,assert:[16,44],assert_gpu:16,assert_gpu_avail:44,associ:[15,37],assum:43,attribut:15,autoencod:4,autoencodermixin:[3,4,6,11,12],automat:40,avail:[2,4,15,16,22,44],axi:40,b_file:24,b_file_list:20,b_set:24,band:[4,16,43],band_typ:20,base:[3,4,5,6,7,8,9,10,11,12,15,16,20,22,23,31,37,38,43],basearchitectureconfigsect:[3,4,5,6,7,8,9,10,11,12],baseconfigsect:[4,16],baseglobalscal:22,basesequ:23,basesklearnscal:22,batch:[4,16,37,38],batch_siz:[16,23,24,38],becaus:45,been:37,befor:4,being:4,below:16,better:40,between:16,block:4,block_structur:[3,4,5,6,9,10,11,12],blockmixin:[3,4,5,6,9,10,11,12],blue:33,bool:[4,16,22,38,40],both:4,bound:16,boundari:16,boundary_bad_valu:[16,24],boundary_fil:16,boundary_subset_geotransform:24,boundary_upper_left:24,boundary_vector_fil:24,box:22,build:[15,16,40,41],build_memmapped_sequ:23,build_or_load_model:38,build_or_load_rawfile_data:24,build_or_load_scal:20,build_training_data_from_response_point:24,build_training_data_ord:24,built:[16,21,23,24],c_file:24,calcul:[16,38,40],calculate_categorical_weight:24,calculate_model_memory_footprint:38,callabl:40,callback:[1,16,36],callback_early_stop:15,callback_gener:15,callback_reduced_learning_r:15,callback_tensorboard:15,callbackearlystop:16,callbackgener:16,callbackreducedlearningr:[15,16],callbacksgener:15,callbacktensorboard:16,can:[4,15],categor:16,categorical_crossentropi:40,center:[16,43],channel:4,characterist:4,check:15,check_config_parameters_not_obsolet:[1,13],check_config_valid:16,check_input_fil:20,check_is_categorical_colormap_rep:33,check_project:24,check_resolut:24,check_scaler_exist:22,checkpoint:37,checkpoint_period:16,chosen:43,classifi:4,classmethod:16,cnn:16,color:4,colormap:[1,25,32],colormap_categor:33,colormap_error:33,colormap_metr:33,colormap_weight:33,colorspac:4,com:38,combin:39,combine_histori:39,common:40,common_io:[1,17],compact:29,comparison:[1,25],complet:37,compon:23,confid:16,config:[1,4,13,19,20,24,25,31,37,38],config_a:15,config_b:15,config_opt:16,config_sect:[1,2,3,5,6,7,8,9,10,11,12],configur:[0,1,4,38,40,45],consid:23,constant_offset:22,constant_scal:22,constantscal:22,construct:[8,12],contain:[16,20],content:0,continu:4,convert:16,convolut:[4,16],copi:38,correspond:16,could:4,count:44,cox:22,crawl:16,creat:[4,15,16,37,40],create_built_data_output_directori:20,create_config_from_fil:15,create_config_templ:15,create_model:[3,5,6,7,8,9,10,11,12],create_model_comparison_report:25,create_model_from_architecture_config_sect:4,create_model_report:25,create_model_report_from_experi:25,create_preliminary_model_report:25,create_preliminary_model_report_from_experi:25,cropped_loss:40,current:[4,15,16,40],custom:[37,41],custom_object:41,dat:43,data:[15,16,20,22],data_build:15,data_contain:[20,23],data_cor:[1,17],data_manag:[0,1],data_sampl:15,data_sequ:31,data_sequence_label:31,data_util:23,databuild:[15,16],datasampl:[15,16],dataset:[19,24,25,38],dataset_list_of_list:19,debug:45,default_block_structur:4,default_dilation_r:[4,7],default_filename_config:15,default_filename_histori:39,default_filename_model:41,default_filt:4,default_kernel_s:4,default_min_conv_width:4,default_num_lay:[4,7],default_optional_valu:13,default_pad:4,default_pool_s:4,default_required_valu:13,default_use_batch_norm:4,default_use_growth:4,default_use_initial_colorspace_transformation_lay:4,delin:15,denot:16,dense_flat_net:[1,2],dense_unet:[1,2],desir:15,despit:16,detail:4,determin:[16,38],deviat:43,dict:[15,16,37,38,39,41],dictionari:15,differ:16,dilat:4,dilation_net:[1,2],dilation_r:[4,7,9],dilationmixin:[4,7,9],dimens:[40,43],dir_out:[16,37,38],dir_project_root:42,dir_templ:42,directli:[24,40],directori:[16,26,38],dirs_histori:25,discard:16,document:[4,16],doe:[23,40],don:45,downsampl:4,draw:16,dure:[4,16],each:[4,15,16,23],earlystop:15,edg:40,effect:4,either:16,enabl:16,encod:16,end:4,epoch:[16,37],error:15,evalu:[0,1,15],even:45,evid:4,exampl:[4,45],exist:[15,16,37,38,39,41],existing_histori:[37,39],experi:[0,1,23,25],f_file_list:20,f_set:24,factor:[16,43],fail:16,fals:[3,4,5,6,7,8,9,10,11,12,16,20,23,24,29,38],fcn:16,featur:[16,20,23],feature_band_typ:20,feature_data_typ:16,feature_fil:16,feature_mean_cent:[16,23],feature_nodata_encod:16,feature_nodata_maximum_fract:16,feature_nodata_valu:16,feature_rang:22,feature_raw_band_typ:[20,24],feature_scal:[20,23],feature_scaler_nam:16,feature_upper_left:24,figur:[1,25,26,27,28,29,30,32],file:[15,16,24,39,41,45],file_list:20,filenam:16,filename_prefix_out:16,filename_suffix:20,filepath:[15,16,38,39,41],filepath_out:25,fill:43,fill_nearest_neighbor:43,filter:[3,4,5,6,7,8,9,10,11,12],finish:16,first:4,fit:[22,23],fit_model_with_dataset:38,fit_model_with_sequ:38,fit_transform:22,five:4,flag:43,flat:[4,8],flat_net:[1,2],flatmixin:[4,7,8],flexibl:[8,12],flip:16,fname:24,fold:16,fold_indic:23,follow:23,footprint:38,form:43,format:[15,16],four:4,from:[15,16,22,37,38,39,41],full:[16,40],fulli:16,futur:4,gain:43,gdal:24,gdal_dataset:19,gener:[1,4,15,16,24,40,42],geotransform:24,get:[2,4,15,24,38,44,45],get_all_interior_extent_subset_pixel_loc:19,get_architecture_config_sect:4,get_available_architectur:[2,4],get_axis_iterator_for_sample_row:34,get_band_typ:20,get_boundary_sets_from_boundary_fil:19,get_built_data_config_filepath:20,get_built_data_filepath:20,get_built_features_filepath:20,get_built_responses_filepath:20,get_built_weights_filepath:20,get_config_as_dict:15,get_config_differ:15,get_config_error:15,get_config_filepath:38,get_config_name_as_snake_cas:16,get_config_options_as_dict:16,get_config_sect:16,get_count_available_gpu:44,get_figure_and_grid:34,get_history_filepath:38,get_human_readable_config_error:15,get_memmap_basenam:20,get_model_callback:37,get_model_filepath:38,get_option_kei:[4,16],get_overlapping_ext:19,get_proj:24,get_raw_and_transformed_sampl:23,get_root_logg:45,get_scal:22,get_site_boundary_set:19,get_temporary_data_filepath:20,get_temporary_features_filepath:20,get_temporary_responses_filepath:20,get_temporary_weights_filepath:20,gigabyt:38,given:[15,16],gpu:[1,16,42],greater:40,greys_r:33,grid:34,gritti:22,growth:4,growthmixin:[3,4,5,6,11,12],handl:[15,22],has:[4,37,40],has_features_transform:31,has_responses_transform:31,have:40,height:40,highlight:15,highlight_requir:16,histogram_freq:16,histori:[1,16,25,36,37,38],historycheckpoint:37,hold:20,hot:16,how:38,http:38,human:15,ident:16,idx_featur:35,idx_respons:35,idx_sampl:[34,35],ignor:[16,43],ignore_project:16,imag:[4,16,22,40,43],image_arrai:22,implement:[4,40],includ:[4,15,16,41],include_sect:15,increas:4,index:[0,4,16,23],indic:[24,43],info:45,inform:[16,37],initi:[4,23],inner_width:40,inner_window_radiu:19,input:[1,16,24,25,40,43],inshap:[3,4,5,6,7,8,9,10,11,12],interior_i:19,interior_x:19,intern:16,invers:22,inverse_transform:22,is_vector:24,kera:[4,16,23,37,38,40,41],kernel:4,kernel_s:[3,4,5,6,7,8,9,10,11,12],keyword:43,last:40,layer:4,learn:[4,22],least:4,length:4,level:45,librari:16,list:[2,4,15,16,19,20,23,24,26,28,29,30,34,37,43],load:[16,22,23,38,39,41],load_histori:39,load_model:41,loaded_existing_histori:38,loaded_existing_model:38,local:43,locat:16,log:[1,37,42],log_outfil:45,logfil:45,logger:45,loss:[1,16,36,41],loss_metr:16,loss_typ:40,loss_window_radiu:16,lower:16,mae:40,mai:4,maner:43,mask:19,match:43,matplotlib:[27,30],max:43,max_built_data_gb:16,max_byt:45,max_epoch:16,max_features_per_pag:[28,30,34],max_filt:29,max_pag:[28,29,30,34],max_responses_per_pag:[28,30,34],max_responses_per_row:30,max_rows_per_pag:30,max_sampl:16,max_samples_per_pag:[28,30,34],maximum:16,mean:[16,43],mean_absolute_error:40,mean_squared_error:40,memmap:16,memmap_fil:21,memmappedsequ:23,memori:38,messag:45,method:22,metric:16,min:43,min_conv_width:[3,4,6,11,12],min_delta:16,minimum:[4,16],minmax:43,minmaxscal:22,miss:[16,43],mixin:4,model:[1,3,4,5,6,7,8,9,10,11,12,15,16,25,29,31,36,37,38,39,40,44],model_histori:[26,39],model_train:15,modeltrain:[15,16],modul:[0,1,2,13,17,25,32,36,42],more:[4,39],most:4,mse:40,must:40,n_class:[3,4,5,6,7,8,9,10,11,12],name:[15,16,24],nan:16,nan_replacement_valu:23,ncol:34,ndoata_valu:43,nearest:43,necessari:[16,41],need:38,neighbor:43,nest:15,net:12,network:[1,4,8,12,16,22,25],neural:[16,22],new_histori:39,nitti:22,nodata:43,nodata_valu:[19,43],none:[15,16,19,20,21,22,23,24,25,31,35,37,38,39,41,43,44,45],normal:[4,43],note:45,nrow:34,nsfabina:42,nullscal:22,num_class:33,num_featur:31,num_lay:[4,7,8],num_respons:31,num_sampl:31,number:[4,16,44],number_fold:16,numpi:[24,43],object:[4,15,16,20,22,31,38,39,41],observ:16,offset:43,often:4,on_batch_begin:37,on_batch_end:37,on_epoch_begin:37,on_epoch_end:37,on_train_begin:37,on_train_end:37,one:16,one_hot_encode_arrai:21,onli:[4,16],ooc_funct:[1,17],optim:16,option:[4,13,15,16,39,40,41,43,45],organ:16,other:[4,15],otherwis:22,out:[16,45],outer_width:40,output:[4,24],output_activ:[3,4,5,6,7,8,9,10,11,12],output_distribut:22,output_shap:24,overweight:16,own:45,packag:[0,22,40],pad:[3,4,5,6,7,8,9,10,11,12],page:0,param:38,paramet:[4,15,23,37,38,39,40,41,45],pars:[15,16],partial:37,pass:[4,16,40],path:[38,39,41],paths_histori:25,patienc:16,pattern:4,per:[40,43],period:[16,37],permut:21,permute_arrai:21,pixel:[4,40],pkl:39,plan:4,plot_binary_error:35,plot_confusion_matrix:30,plot_figures_iterating_through_samples_features_respons:34,plot_histori:27,plot_max_likelihood:35,plot_model_loss_comparison:26,plot_model_timing_comparison:26,plot_network_feature_progress:29,plot_raw_and_transformed_input_sampl:28,plot_raw_and_transformed_prediction_sampl:30,plot_raw_error_regress:35,plot_raw_featur:35,plot_raw_predict:35,plot_raw_respons:35,plot_spatial_categorical_error:30,plot_spatial_regression_error:30,plot_transformed_error_regress:35,plot_transformed_featur:35,plot_transformed_predict:35,plot_transformed_respons:35,plot_weight:35,plotter:34,pool:4,pool_siz:[3,4,6,11,12],powerscal:22,predict:[4,22],prefix:16,preset:43,previou:39,print_classification_report:30,print_model_summari:29,prior:22,probabl:45,process:22,project:[16,24],proport:16,provid:[4,16],quantile_rang:22,quantileuniformscal:22,question:38,r_file_list:20,r_set:24,radiu:16,random:16,random_se:16,raster:[16,24],rasterize_vector:24,rate:4,raw:[15,16],raw_band_typ:21,raw_featur:31,raw_features_rang:31,raw_fil:15,raw_predict:31,raw_predictions_rang:31,raw_respons:31,raw_responses_rang:31,rawfil:[15,16],rdbu:33,reach:16,read:15,read_labeling_chunk:24,read_map_subset:19,read_mask_chunk:24,read_segmentation_chunk:24,readabl:15,readili:22,real:16,rebuild:[20,23,24],recent:39,refer:40,report:15,reproduc:16,requir:[4,13,15,16],reshap:22,residual_dilation_net:[1,2],residual_flat_net:[1,2],residual_unet:[1,2],respons:[16,20,23,24,40],response_background_valu:16,response_band_typ:20,response_data_format:16,response_data_typ:16,response_fil:16,response_max_valu:16,response_min_valu:16,response_nodata_valu:16,response_raw_band_typ:[20,24],response_scal:[20,23],response_scaler_nam:16,response_upper_left:24,result:[1,15,25,40],resume_train:38,review:22,rigor:38,rmse:40,robustscal:22,root:45,root_mean_squared_error:40,rotat:16,run:16,same:[3,4,5,6,7,8,9,10,11,12],sampl:[1,4,16,25,28,29,30,34,35,40],sample_index:24,save:[15,16,22,39,41],save_config_to_fil:15,save_histori:39,save_model:41,savenam:22,savename_bas:22,scale:43,scale_imag:43,scale_image_mean:43,scale_image_mean_std:43,scale_image_minmax:43,scale_vector:43,scaler:[1,16,17,23],scaler_nam:22,scaler_opt:22,scikit:22,search:0,second:4,section:[1,4,13,15],see:[4,16],seed:16,sensit:16,sequenc:[1,17],serial:[15,39,41],session:39,set:45,set_config_opt:16,setlevel:45,shamelessli:38,shape:[8,12,24],share:[1,25],should:[4,15,16,40,45],shuffl:19,silent:16,simpl:40,singl:4,single_sequence_prediction_histogram:30,size:[4,16,38,40],some:4,sort:20,sourc:[2,3,4,5,6,7,8,9,10,11,12,14,15,16,19,20,21,22,23,24,25,26,27,28,29,30,31,33,34,35,37,38,39,40,41,43,44,45],source_filenam:21,specif:4,specifi:[4,40,43],speifi:43,stackoverflow:38,standard:43,standardscal:22,start:16,state:16,std:43,stdout:45,step:[4,23],stop:16,str:[2,4,15,16,20,24,26,38,39,40,41,45],strategi:16,string:15,structur:16,style:[8,12,24],submodul:[0,1],subpackag:0,subplot:[1,25,32],support:[4,40],tab20:33,templat:[15,42],tensorboard:[15,16],termin:16,test:[16,23,38],test_fold:16,than:[4,40],thi:[4,16,22,23,45],third:4,those:40,three:4,todo:16,track:16,train:[4,15,16,23,37,38,39,40,44],train_fold:20,training_data:[1,17],training_sequ:[20,25,38],tran:19,trans_featur:31,trans_features_rang:31,trans_predict:31,trans_predictions_rang:31,trans_respons:31,trans_responses_rang:31,transform:[4,16,22],trim:40,tupl:[4,23,24],two:[4,43],type:[2,3,4,5,6,7,8,9,10,11,12,15,16,19,20,21,22,23,24,25,26,27,28,29,30,34,35,37,38,39,40,41,44,45],underrepres:16,unet:[1,2],uniform:22,uniformli:16,update_freq:16,upper_left:19,upper_left_pixel:19,upsampl:4,use:[4,16,22,40,43],use_batch_norm:[3,4,5,6,7,8,9,10,11,12],use_callback:16,use_growth:[3,4,5,6,11,12],use_initial_colorspace_transformation_lay:[3,4,5,6,7,8,9,10,11,12],use_terminate_on_nan:16,used:4,useful:[4,16,45],user:[16,42],using:[4,22,43],util:[0,1,23],valid:[15,16,23],validation_fold:16,validation_sequ:[20,25,38],valu:[4,15,16,40,43],value_no_data:43,variabl:4,vector:[24,43],vector_fil:24,verbos:[16,37],version:15,wai:40,walk_directories_for_model_histori:26,weight:[16,20,23,24,31,40],weights_rang:31,well:22,when:16,where:4,whether:[4,24,38,40],which:[15,16,39,41,45],width:[4,40],window:[16,40],window_diamet:[19,24],window_radiu:[16,19],within:16,work:40,write:45,write_grad:16,write_graph:16,write_imag:16,written:[15,45],yaml:15,you:45,your:45},titles:["Welcome to rsCNN\u2019s documentation!","rsCNN package","rsCNN.architectures package","rsCNN.architectures.alex_net module","rsCNN.architectures.config_sections module","rsCNN.architectures.dense_flat_net module","rsCNN.architectures.dense_unet module","rsCNN.architectures.dilation_net module","rsCNN.architectures.flat_net module","rsCNN.architectures.residual_dilation_net module","rsCNN.architectures.residual_flat_net module","rsCNN.architectures.residual_unet module","rsCNN.architectures.unet module","rsCNN.configuration package","rsCNN.configuration.check_config_parameters_not_obsolete module","rsCNN.configuration.configs module","rsCNN.configuration.sections module","rsCNN.data_management package","rsCNN.data_management.apply_model_to_data module","rsCNN.data_management.common_io module","rsCNN.data_management.data_core module","rsCNN.data_management.ooc_functions module","rsCNN.data_management.scalers module","rsCNN.data_management.sequences module","rsCNN.data_management.training_data module","rsCNN.evaluation package","rsCNN.evaluation.comparisons module","rsCNN.evaluation.histories module","rsCNN.evaluation.inputs module","rsCNN.evaluation.networks module","rsCNN.evaluation.results module","rsCNN.evaluation.samples module","rsCNN.evaluation.shared package","rsCNN.evaluation.shared.colormaps module","rsCNN.evaluation.shared.figures module","rsCNN.evaluation.shared.subplots module","rsCNN.experiments package","rsCNN.experiments.callbacks module","rsCNN.experiments.experiments module","rsCNN.experiments.histories module","rsCNN.experiments.losses module","rsCNN.experiments.models module","rsCNN.utils package","rsCNN.utils.general module","rsCNN.utils.gpus module","rsCNN.utils.logging module"],titleterms:{alex_net:3,apply_model_to_data:18,architectur:[2,3,4,5,6,7,8,9,10,11,12],callback:37,check_config_parameters_not_obsolet:14,colormap:33,common_io:19,comparison:26,config:15,config_sect:4,configur:[13,14,15,16],data_cor:20,data_manag:[17,18,19,20,21,22,23,24],dense_flat_net:5,dense_unet:6,dilation_net:7,document:0,evalu:[25,26,27,28,29,30,31,32,33,34,35],experi:[36,37,38,39,40,41],figur:34,flat_net:8,gener:43,gpu:44,histori:[27,39],indic:0,input:28,log:45,loss:40,model:41,modul:[3,4,5,6,7,8,9,10,11,12,14,15,16,18,19,20,21,22,23,24,26,27,28,29,30,31,33,34,35,37,38,39,40,41,43,44,45],network:29,ooc_funct:21,packag:[1,2,13,17,25,32,36,42],residual_dilation_net:9,residual_flat_net:10,residual_unet:11,result:30,rscnn:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45],sampl:31,scaler:22,section:16,sequenc:23,share:[32,33,34,35],submodul:[2,13,17,25,32,36,42],subpackag:[1,25],subplot:35,tabl:0,training_data:24,unet:12,util:[42,43,44,45],welcom:0}})