import { ConfigurationCountriesResponse } from 'src/app/models/apis/configurations';

const MockCountryOne: ConfigurationCountriesResponse = {
	iso_3166_1: 'codeOne',
	english_name: 'Egypt',
};

const MockCountryTwo: ConfigurationCountriesResponse = {
	iso_3166_1: 'codeTwo',
	english_name: 'Merica',
};

export const MockConfigurationCountriesResponse = [
	MockCountryOne,
	MockCountryTwo,
];
