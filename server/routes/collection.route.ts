import { NextFunction, Request, Response, Router } from 'express';
import { getCollectionsDetails, getCollectionsImages } from '../controllers';

export const router = Router();

router.get('/:collectionId', getCollectionsDetails);

router.get('/:collectionId/images', getCollectionsImages);