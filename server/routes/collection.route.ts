import { getCollectionsDetails, getCollectionsImages } from '../controllers';

import { Router } from 'express';

export const router = Router();

const collectionId = '/:collectionId';

router.get(collectionId, getCollectionsDetails);

router.get(`${collectionId}/images`, getCollectionsImages);