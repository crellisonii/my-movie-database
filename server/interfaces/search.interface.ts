export interface SearchInput {
	first_air_date_year?: number;
	include_adult?: boolean;
	language?: string;
	page?: number;
	primary_release_year?: number;
	query?: string;
	region?: string;
	year?: number;
}

export interface SearchParams {
	first_air_date_year?: number;
	include_adult?: boolean;
	language?: string;
	page?: number;
	primary_release_year?: number;
	query: string;
	region?: string;
	year?: number;
}
