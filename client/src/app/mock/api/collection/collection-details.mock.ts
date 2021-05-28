import {
	CollectionsDetailsParts,
	CollectionsDetailsResponse,
} from 'src/app/models';

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
