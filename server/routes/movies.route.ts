import { getMovieCredits, getMovieDetails, getMovieImages, getMovieRecommendations } from '../controllers';

import { Router } from 'express';

export const router = Router();

router.get('/:movieId', getMovieDetails);

router.get('/:movieId/credits', getMovieCredits);

router.get('/:movieId/images', getMovieImages);

router.get('/:movieId/recommendations', getMovieRecommendations);