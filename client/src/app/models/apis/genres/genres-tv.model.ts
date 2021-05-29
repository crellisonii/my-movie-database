export interface GenresTVInput {
	language?: string;
}

export interface GenresTVGenres {
	id?: number;
	name?: string;
}

export interface GenresTVResponse {
	genres?: GenresTVGenres[];
}
