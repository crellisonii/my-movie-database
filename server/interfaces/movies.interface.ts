// Input interfaces
import { Genre } from './genres.interface';
export interface MovieInput {
  language?: string;
  append_to_response?: string;
}

export interface MovieDetailsQueryString {
  api_key: string;
  language: string;
  append_to_response?: string;
}

// Types interfaces
interface ProductionCompanies {
  id?: number;
  logo_path?: string;
  name?: string;
  origin_country?: string;
}

interface ProductionCountries {
  iso_3166_1?: string;
  name?: string;
}

interface SpokenLanguages {
  iso_639_1?: string;
  name?: string;
}

export interface MovieDetails {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: string;
  budget?: number;
  genres?: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  production_companies?: ProductionCompanies[];
  production_countries?: ProductionCountries[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  spoken_languages?: SpokenLanguages[];
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}