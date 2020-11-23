// Input interfaces
export interface GenresInput {
  language?: string;
}

export interface GenresQueryString {
  api_key: string;
  language: string;
}

// Types interfaces
interface Genre {
  id?: number;
  name?: string;
}

export interface Genres {
  genres?: Genre[];
}