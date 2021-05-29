import {
	CollectionsTranslations,
	CollectionsTranslationsData,
	CollectionsTranslationsInput,
	CollectionsTranslationsResponse,
} from 'src/app/models';

export const MockCollectionTranslationsInput: CollectionsTranslationsInput = {
	collectionId: 109076,
	language: 'en-US',
};

export const MockCollectionTranslationsData: CollectionsTranslationsData = {
	title: 'My Collection',
};

export const MockCollectionTranslations: CollectionsTranslations = {
	name: 'Translations',
	data: MockCollectionTranslationsData,
};

export const MockCollectionTranslationsResponse: CollectionsTranslationsResponse =
	{
		id: 109076,
		translations: [MockCollectionTranslations],
	};
