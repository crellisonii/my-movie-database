export interface CollectionsDetailsInput {
	collectionId: number;
	language?: string;
}

export interface CollectionsDetailsParts {
	adult?: boolean;
	genre_ids?: number[];
	id?: number;
	original_language?: string;
	original_title?: string;
	overview?: string;
	release_date?: string;
	poster_path?: string;
	popularity?: number;
	title?: string;
	video?: boolean;
	vote_average?: number;
	vote_count?: number;
}

export interface CollectionsDetailsResponse {
	backdrop_path?: string;
	id?: number;
	name?: string;
	overview?: string;
	parts?: CollectionsDetailsParts[];
}
