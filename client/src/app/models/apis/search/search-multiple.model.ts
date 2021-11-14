import { MovieResult, TVResult } from '../shared';

export interface SearchMultipleInput {
	include_adult?: boolean;
	language?: string;
	page?: number;
	query: string;
	region?: string;
}

export interface SearchMultiplePeopleResult {
	adult?: boolean;
	id?: number;
	known_for?: (MovieResult | TVResult)[];
	media_type: string;
	name?: string;
	popularity?: number;
	profile_path?: string | null;
}

export interface SearchMultipleResponse {
	page?: number;
	results?: (MovieResult | TVResult | SearchMultiplePeopleResult)[];
	total_pages?: number;
	total_results?: number;
}
