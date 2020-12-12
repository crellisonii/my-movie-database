import { Router } from 'express';
import { getSearchCollections } from '../controllers';

export const router = Router();

router.get('/collection', getSearchCollections);