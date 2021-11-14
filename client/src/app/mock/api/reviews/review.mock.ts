import {
	ReviewAuthorDetails,
	ReviewInput,
	ReviewResponse,
} from 'src/app/models';

export const MockReviewInput: ReviewInput = {
	review_id: '12345',
};

export const MockReviewAuthorDetails: ReviewAuthorDetails = {
	name: 'Name',
	username: 'my_username',
};

export const MockReviewResponse: ReviewResponse = {
	id: '12345',
	author: 'Name',
};
