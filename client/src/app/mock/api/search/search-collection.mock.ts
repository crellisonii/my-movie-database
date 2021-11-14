import { SearchCollectionResponse } from 'src/app/models/apis';

const MockCollectionResults = {
	id: 5,
	backdrop_path: null,
	name: 'The Lost Boys',
	poster_path: null,
};

export const MockCollectionResponse: SearchCollectionResponse = {
	page: 1,
	results: [MockCollectionResults],
	total_pages: 1,
	total_results: 1,
};
