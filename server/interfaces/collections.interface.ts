// Input interfaces
export interface CollectionInput {
  language?: string;
}

export interface CollectionQueryString {
  api_key: string;
  language: string;
}

// Types interfaces
interface DetailsParts {
  adult?: boolean;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface Image {
  aspect_ratio?: number;
  file_path?: string;
  height?: number;
  vote_average?: number;
  vote_count?: number;
  width?: number;
}

export interface CollectionDetails {
  backdrop_path?: string;
  id?: number;
  name?: string;
  overview?: string;
  parts?: DetailsParts[];
}

export interface CollectionImages {
  backdrops?: Image[];
  id?: number;
  posters?: Image[];
}