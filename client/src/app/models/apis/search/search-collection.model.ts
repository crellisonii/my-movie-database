export interface SearchCollectionInput {
	language?: string;
	page?: number;
	query: string;
}

interface SearchCollectionResult {
	backdrop_path?: string | null;
	id?: number;
	name?: string;
	poster_path?: string | null;
}

export interface SearchCollectionResponse {
	page?: number;
	results?: SearchCollectionResult[];
	total_pages?: number;
	total_results?: number;
}
