// Input Interface
export class SearchInput {
  first_air_date_year?: number;
  include_adult?: boolean;
  language?: string;
  page?: number;
  primary_release_year?: number;
  query?: string;
  region?: string;
  year?: number;
}

// Query params Interface
export class SearchQueryString {
  api_key: string;
  first_air_date_year?: number;
  include_adult?: boolean;
  language?: string;
  page?: number;
  primary_release_year?: number;
  query: string;
  region?: string;
  year?: number;
}