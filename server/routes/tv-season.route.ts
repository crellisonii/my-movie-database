import {
	getTvSeasonAggregateCredits,
	getTvSeasonCredits,
	getTvSeasonDetails,
	getTvSeasonExternalIds,
	getTvSeasonImages,
	getTvSeasonVideos,
} from "../controllers";

import { Router } from "express";

export const router = Router();

const season = "/:tvId/season/:seasonNumber";

router.get(season, getTvSeasonDetails);

router.get(`${season}/aggregate_credits`, getTvSeasonAggregateCredits);

router.get(`${season}/credits`, getTvSeasonCredits);

router.get(`${season}/external_ids`, getTvSeasonExternalIds);

router.get(`${season}/images`, getTvSeasonImages);

router.get(`${season}/videos`, getTvSeasonVideos);
