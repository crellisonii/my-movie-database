import {
  getTVCredits,
  getTVDetails,
  getTVEpisodeGroups,
  getTVExternalIds,
  getTVImages,
  getTVLatest,
  getTVPopular,
  getTVRecommendations,
  getTVReviews,
  getTVSimilar,
  getTVTopRated
} from "../controllers";

import { Router } from "express";

export const router = Router();

const tvId = '/:tvId';

router.get(tvId, getTVDetails);

router.get(`${tvId}/credits`, getTVCredits);

router.get(`${tvId}/episode_groups`, getTVEpisodeGroups);

router.get(`${tvId}/external_ids`, getTVExternalIds);

router.get(`${tvId}/images`, getTVImages);

router.get(`${tvId}/recommendations`, getTVRecommendations);

router.get(`${tvId}/reviews`, getTVReviews);

router.get(`${tvId}/similar`, getTVSimilar);

router.get(`${tvId}/videos`);

router.get('/latest', getTVLatest);

router.get('/popular', getTVPopular);

router.get('/top_rated', getTVTopRated);