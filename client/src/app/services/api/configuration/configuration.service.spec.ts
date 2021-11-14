import {
	ConfigurationCountriesResponse,
	ConfigurationJobsResponse,
	ConfigurationLanguageResponse,
	ConfigurationResponse,
	ConfigurationTimezoneResponse,
} from 'src/app/models';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	MockConfigurationCountriesResponse,
	MockConfigurationJobResponse,
	MockConfigurationLanguageResponse,
	MockConfigurationPrimaryTranslationResponse,
	MockConfigurationResponse,
	MockConfigurationTimezoneResponse,
} from 'src/app/mock';

import { ConfigurationService } from './configuration.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('ConfigurationService', () => {
	let service: ConfigurationService;
	let testingController: HttpTestingController;
	let baseUrl = `${environment.apiUrl}/configuration`;
	let mockConfiguration: ConfigurationResponse;
	let mockConfigurationCountry: ConfigurationCountriesResponse[];
	let mockConfigurationJob: ConfigurationJobsResponse[];
	let mockConfigurationLanguage: ConfigurationLanguageResponse[];
	let mockConfigurationPrimaryTranslations: string[];
	let mockConfigurationTimezone: ConfigurationTimezoneResponse[];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(ConfigurationService);
		testingController = TestBed.inject(HttpTestingController);
		mockConfiguration = MockConfigurationResponse;
		mockConfigurationCountry = MockConfigurationCountriesResponse;
		mockConfigurationJob = MockConfigurationJobResponse;
		mockConfigurationLanguage = MockConfigurationLanguageResponse;
		mockConfigurationPrimaryTranslations =
			MockConfigurationPrimaryTranslationResponse;
		mockConfigurationTimezone = MockConfigurationTimezoneResponse;
	});

	it('should get configuration', () => {
		let result: ConfigurationResponse;
		service.getConfiguration().subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(baseUrl);
		req.flush(mockConfiguration);
		expect(result).toEqual(mockConfiguration);
	});

	it('should get configurationCountry', () => {
		let result: ConfigurationCountriesResponse[];
		let url = `${baseUrl}/countries`;
		service.getConfigurationCountries().subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockConfigurationCountry);
		expect(result).toEqual(mockConfigurationCountry);
	});

	it('should get configurationJob', () => {
		let result: ConfigurationJobsResponse[];
		let url = `${baseUrl}/jobs`;
		service.getConfigurationJobs().subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockConfigurationJob);
		expect(result).toEqual(mockConfigurationJob);
	});

	it('should get configurationLanguage', () => {
		let result: ConfigurationLanguageResponse[];
		let url = `${baseUrl}/languages`;
		service.getConfigurationLanguages().subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockConfigurationLanguage);
		expect(result).toEqual(mockConfigurationLanguage);
	});

	it('should get configurationPrimaryTranslations', () => {
		let result: string[];
		let url = `${baseUrl}/primary_translations`;
		service.getConfigurationPrimaryTranslations().subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockConfigurationPrimaryTranslations);
		expect(result).toEqual(mockConfigurationPrimaryTranslations);
	});

	it('should get configurationTimezones', () => {
		let result: ConfigurationTimezoneResponse[];
		let url = `${baseUrl}/timezones`;
		service.getConfigurationTimezones().subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockConfigurationTimezone);
		expect(result).toEqual(mockConfigurationTimezone);
	});
});
