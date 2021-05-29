import {
	CompanyAlternativeNamesInput,
	CompanyAlternativeNamesResponse,
	CompanyAlternativeNamesResults,
} from 'src/app/models';

export const MockCompanyAlternativeNamesInput: CompanyAlternativeNamesInput = {
	companyId: 1957,
};

export const MockCompanyAlternativeNamesResults: CompanyAlternativeNamesResults =
	{
		name: 'Mine',
		type: 'Awesome',
	};

export const MockCompanyAlternativeNamesResponse: CompanyAlternativeNamesResponse =
	{
		id: 1957,
		results: [MockCompanyAlternativeNamesResults],
	};
