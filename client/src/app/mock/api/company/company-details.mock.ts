import {
	CompanyDetailsInput,
	CompanyDetailsResponse,
} from 'src/app/models/apis/companies';

export const MockCompanyDetailsInput: CompanyDetailsInput = {
	companyId: 1957,
};

export const MockCompanyDetailsResponse: CompanyDetailsResponse = {
	id: 1957,
	name: 'Mine',
	origin_country: 'USA',
};
