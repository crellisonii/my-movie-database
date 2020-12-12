import {
  getMovieCredits,
  getMovieDetails,
  getMovieExternalIds,
  getMovieImages,
  getMovieLatest,
  getMovieNowPlaying,
  getMoviePopular,
  getMovieRecommendations,
  getMovieReviews,
  getMovieSimilar,
  getMovieTopRated,
  getMovieUpcoming,
  getMovieVideos
} from '../controllers';

import { Router } from 'express';

export const router = Router();

const movieId = '/:movieId';

router.get(movieId, getMovieDetails);

router.get(`${movieId}/credits`, getMovieCredits);

router.get(`${movieId}/external_ids`, getMovieExternalIds)

router.get(`${movieId}/images`, getMovieImages);

router.get(`${movieId}/recommendations`, getMovieRecommendations);

router.get(`${movieId}/reviews`, getMovieReviews);

router.get(`${movieId}/similar`, getMovieSimilar);

router.get(`${movieId}/videos`, getMovieVideos);

router.get('/latest', getMovieLatest);

router.get('/now_playing', getMovieNowPlaying);

router.get('/popular', getMoviePopular);

router.get('/top_rated', getMovieTopRated)

router.get('/upcoming', getMovieUpcoming);