export interface CompanyDetailsInput {
	companyId: number;
}

export interface CompanyDetailsResponse {
	description?: string;
	headquarters?: string;
	homepage?: string;
	id?: number;
	logo_path?: string;
	name?: string;
	origin_country?: string;
	parent_company?: CompanyDetailsResponse | null;
}
