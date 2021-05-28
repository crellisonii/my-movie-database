import {
	CollectionsDetailsResponse,
	CollectionsImagesResponse,
} from 'src/app/models';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	MockCollectionsDetailsResponse,
	MockCollectionsImagesResponse,
} from 'src/app/mock';

import { CollectionService } from './collection.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('CollectionService', () => {
	let service: CollectionService;
	let testingController: HttpTestingController;
	let mockCollectionsDetails: CollectionsDetailsResponse;
	let mockCollectionsImages: CollectionsImagesResponse;
	let baseUrl = `${environment.apiUrl}/collection`;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(CollectionService);
		testingController = TestBed.inject(HttpTestingController);
		mockCollectionsDetails = MockCollectionsDetailsResponse;
		mockCollectionsImages = MockCollectionsImagesResponse;
	});

	it('should get details', () => {
		let result: CollectionsDetailsResponse;
		const id = 109076;
		const language = 'en-US';
		const url = `${baseUrl}/${id}?language=${language}`;
		service
			.getCollectionDetail({ collectionId: id, language })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockCollectionsDetails);
		expect(result).toEqual(mockCollectionsDetails);
	});

	it('should get images', () => {
		let result: CollectionsImagesResponse;
		const id = 109076;
		const language = 'en-US';
		const url = `${baseUrl}/${id}/images?language=${language}`;
		service
			.getCollectionImages({ collectionId: id, language })
			.subscribe((response) => {
				result = response;
			});
		const req = testingController.expectOne(url);
		req.flush(mockCollectionsImages);
		expect(result).toEqual(mockCollectionsImages);
	});
});
