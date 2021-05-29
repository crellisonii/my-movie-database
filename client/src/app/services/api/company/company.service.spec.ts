import {
	CompanyAlternativeNamesResponse,
	CompanyDetailsResponse,
	CompanyImagesResponse,
} from 'src/app/models/apis/companies';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	MockCompanyAlternativeNamesInput,
	MockCompanyAlternativeNamesResponse,
	MockCompanyDetailsInput,
	MockCompanyDetailsResponse,
	MockCompanyImagesInput,
	MockCompanyImagesResponse,
} from 'src/app/mock/api/company';

import { CompanyService } from './company.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('CompanyService', () => {
	let service: CompanyService;
	let testController: HttpTestingController;
	let baseUrl = `${environment.apiUrl}/company`;
	let mockCompanyAlternativeNamesResponse: CompanyAlternativeNamesResponse;
	let mockCompanyDetailsResponse: CompanyDetailsResponse;
	let mockCompanyImagesResponse: CompanyImagesResponse;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(CompanyService);
		testController = TestBed.inject(HttpTestingController);
		mockCompanyAlternativeNamesResponse = MockCompanyAlternativeNamesResponse;
		mockCompanyDetailsResponse = MockCompanyDetailsResponse;
		mockCompanyImagesResponse = MockCompanyImagesResponse;
	});

	it('should get companyAlternativeNames', () => {
		let result: CompanyAlternativeNamesResponse;
		let input = MockCompanyAlternativeNamesInput;
		const url = `${baseUrl}/${input.companyId}/alternative_names`;
		service.getCompanyAlternativeNames(input).subscribe((response) => {
			result = response;
		});
		const req = testController.expectOne(url);
		req.flush(mockCompanyAlternativeNamesResponse);
		expect(result).toEqual(mockCompanyAlternativeNamesResponse);
	});

	it('should get companyDetails', () => {
		let result: CompanyDetailsResponse;
		let input = MockCompanyDetailsInput;
		const url = `${baseUrl}/${input.companyId}`;
		service.getCompanyDetails(input).subscribe((response) => {
			result = response;
		});
		const req = testController.expectOne(url);
		req.flush(mockCompanyDetailsResponse);
		expect(result).toEqual(mockCompanyDetailsResponse);
	});

	it('should get companyImages', () => {
		let result: CompanyImagesResponse;
		let input = MockCompanyImagesInput;
		const url = `${baseUrl}/${input.companyId}/images`;
		service.getCompanyImages(input).subscribe((response) => {
			result = response;
		});
		const req = testController.expectOne(url);
		req.flush(mockCompanyImagesResponse);
		expect(result).toEqual(mockCompanyImagesResponse);
	});
});
