export interface SearchTVInput {
	first_air_date_year?: number;
	include_adult?: boolean;
	language?: string;
	page?: number;
	query: string;
}

interface SearchTVResult {
	backdrop_path?: string | null;
	first_air_date?: string;
	genre_ids?: number[];
	id?: number;
	name?: string;
	origin_country?: string[];
	original_language?: string;
	original_name?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string | null;
	vote_average?: number;
	vote_count?: number;
}

export interface SearchTVResponse {
	page?: number;
	results?: SearchTVResult[];
	total_pages?: number;
	total_results?: number;
}
