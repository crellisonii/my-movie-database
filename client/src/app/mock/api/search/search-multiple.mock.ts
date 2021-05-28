import {
	MovieResult,
	SearchMultiplePeopleResult,
	SearchMultipleResponse,
	TVResult,
} from 'src/app/models';

const MockMultipleMovieResult: MovieResult = {
	media_type: 'movie',
	id: 1,
	title: 'Rudy',
};

const MockMultipleTVResult: TVResult = {
	media_type: 'tv',
	id: 2,
	name: 'Stranger Things',
};

const MockMultiplePersonResult: SearchMultiplePeopleResult = {
	media_type: 'person',
	id: 12,
	known_for: [MockMultipleMovieResult, MockMultipleTVResult],
	name: 'Sean Astin',
};

export const MockMultipleResponse: SearchMultipleResponse = {
	page: 1,
	results: [
		MockMultipleMovieResult,
		MockMultipleTVResult,
		MockMultiplePersonResult,
	],
	total_results: 1,
	total_pages: 1,
};
