import {
	CollectionsImages,
	CollectionsImagesInput,
	CollectionsImagesResponse,
} from 'src/app/models';

export const MockCollectionsImagesInput: CollectionsImagesInput = {
	collectionId: 109076,
	language: 'en-US',
};

const MockCollectionsImagesBackdrops: CollectionsImages = {
	file_path: 'path to image',
};

const MockCollectionsImagesPosters: CollectionsImages = {
	file_path: 'path to image 2',
};

export const MockCollectionsImagesResponse: CollectionsImagesResponse = {
	id: 1,
	backdrops: [MockCollectionsImagesBackdrops],
	posters: [MockCollectionsImagesPosters],
};
