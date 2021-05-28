import {
	MovieResult,
	SearchPeopleResponse,
	SearchPeopleResult,
	TVResult,
} from 'src/app/models';

const MockPeopleMovieResult: MovieResult = {
	media_type: 'movie',
	id: 1,
	title: 'Rudy',
};

const MockPeopleTVResult: TVResult = {
	media_type: 'tv',
	id: 2,
	name: 'Stranger Things',
};

const MockPeopleResult: SearchPeopleResult = {
	id: 12,
	known_for: [MockPeopleMovieResult, MockPeopleTVResult],
	name: 'Sean Astin',
};

export const MockPeopleResponse: SearchPeopleResponse = {
	page: 1,
	results: [MockPeopleResult],
	total_pages: 1,
	total_results: 1,
};
