import {
	SearchTVResponse,
	SearchTVResult,
} from 'src/app/models/apis/search/search-tv.model';

const MockTVResult: SearchTVResult = {
	id: 2,
	name: 'Stranger Things',
};

export const MockTVResponse: SearchTVResponse = {
	page: 1,
	results: [MockTVResult],
	total_pages: 1,
	total_results: 1,
};
