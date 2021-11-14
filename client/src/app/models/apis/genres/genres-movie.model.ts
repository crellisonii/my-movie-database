export interface GenresMovieInput {
	language?: string;
}

export interface GenresMovieGenres {
	id?: number;
	name?: string;
}

export interface GenresMovieResponse {
	genres?: GenresMovieGenres[];
}
