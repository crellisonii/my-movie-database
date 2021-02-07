// Input interfaces
export interface MovieInput {
  append_to_response?: string;
  language?: string;
  page?: number;
  region?: string;
}

// Query String
export interface MovieParams {
  api_key: string;
  append_to_response?: string;
  language?: string;
  page?: number;
  region?: string;
}