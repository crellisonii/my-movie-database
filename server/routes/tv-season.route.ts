import { getTvSeasonAggregateCredits, getTvSeasonCredits, getTvSeasonDetails, getTvSeasonExternalIds, getTvSeasonImages } from "../controllers";

import { Router } from "express";

export const router = Router();

const season = '/:tvId/season/:seasonId';

router.get(season, getTvSeasonDetails);

router.get(`${season}/aggregate_credits`, getTvSeasonAggregateCredits);

router.get(`${season}/credits`, getTvSeasonCredits);

router.get(`${season}/external_ids`, getTvSeasonExternalIds);

router.get(`${season}/images`, getTvSeasonImages);
