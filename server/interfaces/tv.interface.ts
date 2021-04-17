// Input Interface
export interface TVInput {
	append_to_response?: string;
	language?: string;
	page?: number;
}

// Query Params Interface
export interface TVParams {
	api_key: string;
	append_to_response?: string;
	language?: string;
	page?: number;
}
