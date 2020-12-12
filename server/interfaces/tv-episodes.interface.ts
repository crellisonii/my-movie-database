// Input Interface
export interface TvEpisodeInput {
  append_to_response?: string;
  language?: string;
}

// Query String Interface
export interface TvEpisodeQueryString {
  api_key: string;
  append_to_response?: string;
  language?: string;
}