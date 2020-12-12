import { getSearchCollections, getSearchMovies } from '../controllers';

import { Router } from 'express';

export const router = Router();

router.get('/collection', getSearchCollections);
router.get('/movie', getSearchMovies);