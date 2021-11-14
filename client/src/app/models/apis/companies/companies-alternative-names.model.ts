export interface CompanyAlternativeNamesInput {
	companyId: number;
}

export interface CompanyAlternativeNamesResults {
	name?: string;
	type?: string;
}

export interface CompanyAlternativeNamesResponse {
	id?: number;
	results?: CompanyAlternativeNamesResults[];
}
