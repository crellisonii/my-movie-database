import { getTVCredits, getTVDetails, getTVExternalIds, getTVImages, getTVRecommendations, getTVReviews, getTVSimilar } from "../controllers";

import { Router } from "express";

export const router = Router();

const tvId = '/:tvId';

router.get(tvId, getTVDetails);

router.get(`${tvId}/credits`, getTVCredits);

router.get(`${tvId}/external_ids`, getTVExternalIds);

router.get(`${tvId}/images`, getTVImages);

router.get(`${tvId}/recommendations`, getTVRecommendations);

router.get(`${tvId}/reviews`, getTVReviews);

router.get(`${tvId}/similar`, getTVSimilar);