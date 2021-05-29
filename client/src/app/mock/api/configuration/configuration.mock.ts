import { ConfigurationImages, ConfigurationResponse } from 'src/app/models';

const MockConfigurationImages: ConfigurationImages = {
	base_url: 'baseUrl',
	secure_base_url: 'secureBaseUrl',
	backdrop_sizes: ['1', '2', '3', '4', '5'],
};

export const MockConfigurationResponse: ConfigurationResponse = {
	images: MockConfigurationImages,
	change_keys: ['id', 'name', 'adult'],
};
