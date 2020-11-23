import { getMovieCredits, getMovieDetails } from '../controllers';

import { Router } from 'express';

export const router = Router();

router.get('/:movieId', getMovieDetails);

router.get('/:movieId/credits', getMovieCredits);