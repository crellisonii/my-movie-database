import {
	CollectionsDetailsResponse,
	CollectionsImagesResponse,
	CollectionsTranslationsResponse,
} from 'src/app/models';
import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import {
	MockCollectionTranslationsInput,
	MockCollectionTranslationsResponse,
} from 'src/app/mock/api/collection/collection-translations.mock';
import {
	MockCollectionsDetailsInput,
	MockCollectionsDetailsResponse,
	MockCollectionsImagesInput,
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
	let mockCollectionsTranslations: CollectionsTranslationsResponse;
	let baseUrl = `${environment.apiUrl}/collection`;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(CollectionService);
		testingController = TestBed.inject(HttpTestingController);
		mockCollectionsDetails = MockCollectionsDetailsResponse;
		mockCollectionsImages = MockCollectionsImagesResponse;
		mockCollectionsTranslations = MockCollectionTranslationsResponse;
	});

	it('should get details', () => {
		let result: CollectionsDetailsResponse;
		const input = MockCollectionsDetailsInput;
		const url = `${baseUrl}/${input.collectionId}?language=${input.language}`;
		service.getCollectionDetail(input).subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockCollectionsDetails);
		expect(result).toEqual(mockCollectionsDetails);
	});

	it('should get images', () => {
		let result: CollectionsImagesResponse;
		const input = MockCollectionsImagesInput;
		const url = `${baseUrl}/${input.collectionId}/images?language=${input.language}`;
		service.getCollectionImages(input).subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockCollectionsImages);
		expect(result).toEqual(mockCollectionsImages);
	});

	it('should get translations', () => {
		let result: CollectionsTranslationsResponse;
		const input = MockCollectionTranslationsInput;
		const url = `${baseUrl}/${input.collectionId}/translations?language=${input.language}`;
		service.getCollectionTranslations(input).subscribe((response) => {
			result = response;
		});
		const req = testingController.expectOne(url);
		req.flush(mockCollectionsTranslations);
		expect(result).toEqual(mockCollectionsTranslations);
	});
});
