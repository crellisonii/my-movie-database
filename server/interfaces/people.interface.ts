// Input interface
export interface PeopleInput {
  append_to_response?: string;
  language?: string;
  page?: number;
}

// Query string
export interface PeopleQueryString {
  append_to_response?: string;
  api_key: string;
  language?: string;
  page?: number;
}