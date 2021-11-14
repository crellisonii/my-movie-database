export interface SearchCompanyInput {
	page?: number;
	query: string;
}

export interface SearchCompanyResults {
	id?: number;
	logo_path?: string | null;
	name?: string;
}

export interface SearchCompanyResponse {
	page?: number;
	results?: SearchCompanyResults[];
	total_pages?: number;
	total_results?: number;
}
