export interface ConfigurationImages {
	backdrop_sizes?: string[];
	base_url?: string;
	logo_sizes?: string[];
	poster_sizes?: string[];
	profile_sizes?: string[];
	secure_base_url?: string;
	still_sizes?: string[];
}

export interface ConfigurationResponse {
	change_keys?: string[];
	images?: ConfigurationImages[];
}
