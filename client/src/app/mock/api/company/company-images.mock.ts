import {
	CompanyImagesInput,
	CompanyImagesLogos,
	CompanyImagesResponse,
} from 'src/app/models/apis/companies';

export const MockCompanyImagesInput: CompanyImagesInput = {
	companyId: 1957,
};

export const MockCompanyImagesLogos: CompanyImagesLogos = {
	id: `${1957}`,
	file_type: '.svg',
};

export const MockCompanyImagesResponse: CompanyImagesResponse = {
	id: 1957,
	logos: [MockCompanyImagesLogos],
};
