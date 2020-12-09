// Input interfaces
export interface MovieInput {
  append_to_response?: string;
  language?: string;
  page?: number;
  region?: string;
}

// Query String
export interface MovieQueryString {
  api_key: string;
  language: string;
  append_to_response?: string;
}