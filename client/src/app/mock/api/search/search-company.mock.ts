import {
	SearchCompanyInput,
	SearchCompanyResponse,
	SearchCompanyResults,
} from 'src/app/models';

export const MockSearchCompanyInput: SearchCompanyInput = {
	page: 1,
	query: 'Warner Bros.',
};

export const MockSearchCompanyResults: SearchCompanyResults = {
	id: 1,
	logo_path: null,
	name: 'Company',
};

export const MockSearchCompanyResponse: SearchCompanyResponse = {
	page: 1,
	results: [MockSearchCompanyResults],
	total_pages: 1,
	total_results: 1,
};
