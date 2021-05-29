export interface CompanyImagesInput {
	companyId: number;
}

export interface CompanyImagesLogos {
	aspect_ratio?: number;
	file_path?: string;
	file_type?: string;
	height?: number;
	id?: string;
	vote_average?: number;
	vote_count?: number;
	width?: number;
}

export interface CompanyImagesResponse {
	id?: number;
	logos?: CompanyImagesLogos[];
}
