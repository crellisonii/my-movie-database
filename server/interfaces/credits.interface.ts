// Input interfaces
export interface CreditsQueryString {
  api_key: string;
}

// Types interfaces
interface Seasons {
  air_date?: string;
  poster_path?: string;
  season_number?: number;
}

interface Media {
  character?: string;
  id?: string;
  name?: string;
  original_name?: string;
  seasons?: Seasons[];
}

interface Person {
  id?: number;
  name?: string;
}

export interface Credits {
  credit_type?: string;
  department?: string;
  id?: string;
  job?: string;
  media?: Media;
  media_type?: string;
  person?: Person;
}