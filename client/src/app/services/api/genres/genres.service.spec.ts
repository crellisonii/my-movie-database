import { GenresMovieResponse, GenresTVResponse } from 'src/app/models';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	MockGenresMovieInput,
	MockGenresMovieResponse,
	MockGenresTVInput,
	MockGenresTVResponse,
} from 'src/app/mock';

import { GenresService } from './genres.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('GenresService', () => {
	let service: GenresService;
	let testController: HttpTestingController;
	let baseUrl = `${environment.apiUrl}/genre`;
	let mockGenresMovieResponse: GenresMovieResponse;
	let mockGenresTVResponse: GenresTVResponse;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(GenresService);
		testController = TestBed.inject(HttpTestingController);
		mockGenresMovieResponse = MockGenresMovieResponse;
		mockGenresTVResponse = MockGenresTVResponse;
	});

	it('should get genres movie list', () => {
		const input = MockGenresMovieInput;
		const url = `${baseUrl}/movie/list?language=${input.language}`;
		let result: GenresMovieResponse;
		service.getGenreMovieList(input).subscribe((response) => {
			result = response;
		});
		const req = testController.expectOne(url);
		req.flush(mockGenresMovieResponse);
		expect(result).toEqual(mockGenresMovieResponse);
	});

	it('should get genres tv list', () => {
		let result: GenresTVResponse;
		const input = MockGenresTVInput;
		const url = `${baseUrl}/tv/list?language=${input.language}`;
		service.getGenreTVList(input).subscribe((response) => {
			result = response;
		});
		const req = testController.expectOne(url);
		req.flush(mockGenresTVResponse);
		expect(result).toEqual(mockGenresTVResponse);
	});
});
