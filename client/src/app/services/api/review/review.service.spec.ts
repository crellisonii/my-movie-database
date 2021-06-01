import {
	HttpClientTestingModule,
	HttpTestingController,
} from '@angular/common/http/testing';
import { MockReviewInput, MockReviewResponse } from 'src/app/mock/';
import { ReviewInput, ReviewResponse } from 'src/app/models';

import { ReviewService } from './review.service';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

describe('ReviewService', () => {
	let service: ReviewService;
	let testcontroller: HttpTestingController;
	let mockReviewResponse: ReviewResponse;
	let baseUrl = `${environment.apiUrl}/review`;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
		});
		service = TestBed.inject(ReviewService);
		testcontroller = TestBed.inject(HttpTestingController);
		mockReviewResponse = MockReviewResponse;
	});

	it('should get review', () => {
		const input: ReviewInput = MockReviewInput;
		const url = `${baseUrl}/${input.review_id}`;
		let result: ReviewResponse;
		service.getReview(input).subscribe((response) => {
			result = response;
		});
		const req = testcontroller.expectOne(url);
		req.flush(mockReviewResponse);
		expect(result).toEqual(mockReviewResponse);
	});
});
