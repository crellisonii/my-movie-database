export interface CollectionsTranslationsInput {
	collectionId: number;
	language?: string;
}

export interface CollectionsTranslationsData {
	homepage?: string;
	overview?: string;
	title?: string;
}

export interface CollectionsTranslations {
	data?: CollectionsTranslationsData;
	english_name?: string;
	iso_639_1?: string;
	iso_3166_1?: string;
	name?: string;
}

export interface CollectionsTranslationsResponse {
	id?: number;
	translations?: CollectionsTranslations[];
}
