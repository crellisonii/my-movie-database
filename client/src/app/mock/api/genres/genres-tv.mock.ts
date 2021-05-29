import {
	GenresTVGenres,
	GenresTVInput,
	GenresTVResponse,
} from 'src/app/models';

export const MockGenresTVInput: GenresTVInput = {
	language: 'en-US',
};

export const MockGenresTVGenres: GenresTVGenres = {
	id: 1,
	name: 'Horror',
};

export const MockGenresTVResponse: GenresTVResponse = {
	genres: [MockGenresTVGenres],
};
