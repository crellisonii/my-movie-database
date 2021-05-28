import { CollectionsImages, CollectionsImagesResponse } from 'src/app/models';

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
