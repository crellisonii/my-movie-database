export interface SearchMovieInput {
	include_adult?: boolean;
	language?: string;
	page?: number;
	primary_release_year?: number;
	query: string;
	region?: string;
	year?: number;
}

interface SearchMovieResults {
	adult?: boolean;
	backdrop_path?: string | null;
	genre_ids?: number[];
	id?: number;
	original_title?: string;
	original_language?: string;
	overview?: string;
	popularity?: number;
	poster_path?: string | null;
	release_date?: string;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}

export interface SearchMovieResponse {
	page?: number;
	results?: SearchMovieResults[];
	total_pages?: number;
	total_results?: number;
}
