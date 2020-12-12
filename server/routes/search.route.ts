import { getSearchCollections, getSearchMovies, getSearchMulti } from '../controllers';

import { Router } from 'express';

export const router = Router();

router.get('/collection', getSearchCollections);
router.get('/movie', getSearchMovies);
router.get('/multi', getSearchMulti);