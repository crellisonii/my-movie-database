import { MovieResult, TVResult } from '../shared';

export interface SearchPeopleInput {
	include_adult?: boolean;
	language?: string;
	page?: number;
	query: string;
	region?: string;
}

interface SearchPeopleResult {
	adult?: boolean;
	id?: number;
	known_for?: (MovieResult | TVResult)[];
	name?: string;
	popularity?: number;
	profile_path?: string | null;
}

export interface SearchPeopleResponse {
	page?: number;
	results?: SearchPeopleResult[];
	total_pages?: number;
	total_results?: number;
}
