import {
	CollectionsDetailsInput,
	CollectionsDetailsParts,
	CollectionsDetailsResponse,
} from 'src/app/models';

export const MockCollectionsDetailsInput: CollectionsDetailsInput = {
	collectionId: 109076,
	language: 'en-US',
};

const MockCollectionsDetailsParts: CollectionsDetailsParts = {
	id: 1,
	title: 'The Lost Boys',
};

export const MockCollectionsDetailsResponse: CollectionsDetailsResponse = {
	id: 1,
	name: 'The Lost Boys',
	overview: 'A really good movie',
	parts: [MockCollectionsDetailsParts],
};
