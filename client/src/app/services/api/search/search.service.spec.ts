import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	MockCollectionResponse,
	MockMovieResponse,
	MockMultipleResponse,
	MockPeopleResponse,
	MockTVResponse,
} from 'src/app/mock';
import {
	SearchCollectionResponse,
	SearchMovieResponse,
	SearchMultipleResponse,
	SearchPeopleResponse,
	SearchTVResponse,
} from 'src/app/models';

import { SearchService } from './search.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('SearchService', () => {
	let searchService: SearchService;
	let testingController: HttpTestingController;
	let mockCollectionResponse: SearchCollectionResponse;
	let mockMovieResponse: SearchMovieResponse;
	let mockMultipleResponse: SearchMultipleResponse;
	let mockPeopleResponse: SearchPeopleResponse;
	let mockTVResponse: SearchTVResponse;
	let baseUrl = `${environment.apiUrl}/search`;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		testingController = TestBed.inject(HttpTestingController);
		searchService = TestBed.inject(SearchService);
		mockCollectionResponse = MockCollectionResponse;
		mockMovieResponse = MockMovieResponse;
		mockMultipleResponse = MockMultipleResponse;
		mockPeopleResponse = MockPeopleResponse;
		mockTVResponse = MockTVResponse;
	});

	it('should get collections', () => {
		let result: SearchCollectionResponse;
		let param = encodeURIComponent('The Lost Boys');
		let url = `${baseUrl}/collection?query=${param}`;
		searchService
			.searchCollections({ query: 'The Lost Boys' })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockCollectionResponse);
		expect(result).toEqual(mockCollectionResponse);
	});

	it('should get movie', () => {
		let result: SearchMovieResponse;
		let param = encodeURIComponent('The Goonies');
		let url = `${baseUrl}/movie?query=${param}`;
		searchService
			.searchMovies({ query: 'The Goonies' })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockMovieResponse);
		expect(result).toEqual(mockMovieResponse);
	});

	it('should get multiple', () => {
		let result: SearchMultipleResponse;
		let param = encodeURIComponent('Sean Astin');
		let url = `${baseUrl}/multi?query=${param}`;
		searchService
			.searchMultiple({ query: 'Sean Astin' })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockMultipleResponse);
		expect(result).toEqual(mockMultipleResponse);
	});

	it('should get people', () => {
		let result: SearchPeopleResponse;
		let param = encodeURIComponent('Sean Astin');
		let url = `${baseUrl}/person?query=${param}`;
		searchService
			.searchPeople({ query: 'Sean Astin' })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockPeopleResponse);
		expect(result).toEqual(mockPeopleResponse);
	});

	it('should get tv', () => {
		let result: SearchTVResponse;
		let param = encodeURIComponent('Stranger Things');
		let url = `${baseUrl}/tv?query=${param}`;
		searchService
			.searchTV({ query: 'Stranger Things' })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockTVResponse);
		expect(result).toEqual(mockTVResponse);
	});
});
