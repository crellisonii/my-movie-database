export interface CollectionsImagesInput {
	collectionId: number;
	language?: string;
}

export interface CollectionsImages {
	aspect_ratio?: number;
	file_path?: string;
	height?: number;
	vote_average?: number;
	vote_count?: number;
}

export interface CollectionsImagesResponse {
	id?: number;
	backdrops?: CollectionsImages[];
	posters?: CollectionsImages[];
}
