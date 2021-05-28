import { SearchMovieResponse, SearchMovieResults } from 'src/app/models';

const MockMovieResults: SearchMovieResults = {
	poster_path: null,
	adult: true,
	overview: "it's a movie",
	release_date: 'today',
	genre_ids: [1, 2],
	id: 1,
	original_title: 'The misfits',
	original_language: 'ingles',
	title: 'The Goonies',
	backdrop_path: null,
	popularity: 100,
	vote_count: 1000,
	vote_average: 10,
	video: true,
};

export const MockMovieResponse: SearchMovieResponse = {
	page: 1,
	results: [MockMovieResults],
	total_pages: 1,
	total_results: 1,
};
