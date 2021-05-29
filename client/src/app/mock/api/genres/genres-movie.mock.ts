import {
	GenresMovieGenres,
	GenresMovieInput,
	GenresMovieResponse,
} from 'src/app/models';

export const MockGenresMovieInput: GenresMovieInput = {
	language: 'en-US',
};

export const MockGenresMovieGenres: GenresMovieGenres = {
	id: 1,
	name: 'Horror',
};

export const MockGenresMovieResponse: GenresMovieResponse = {
	genres: [MockGenresMovieGenres],
};
