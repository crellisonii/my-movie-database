import { getMovieCredits, getMovieDetails, getMovieImages, getMovieRecommendations, getMovieReviews, getMovieSimilar, getMovieVideos } from '../controllers';

import { Router } from 'express';

export const router = Router();

const idParams = '/:movieId';

router.get(idParams, getMovieDetails);

router.get(`${idParams}/credits`, getMovieCredits);

router.get(`${idParams}/images`, getMovieImages);

router.get(`${idParams}/recommendations`, getMovieRecommendations);

router.get(`${idParams}/reviews`, getMovieReviews);

router.get(`${idParams}/similar`, getMovieSimilar);

router.get(`${idParams}/videos`, getMovieVideos);