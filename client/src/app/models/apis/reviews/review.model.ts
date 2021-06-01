export interface ReviewInput {
	review_id: string;
}

export interface ReviewAuthorDetails {
	avatar_path?: string;
	name?: string;
	rating?: number;
	username?: string;
}

export interface ReviewResponse {
	author?: string;
	author_details?: ReviewAuthorDetails;
	content?: string;
	created_at?: string;
	id?: string;
	iso_639_1?: string;
	media_id?: number;
	media_title?: string;
	media_type?: string;
	updated_at?: string;
	url?: string;
}
