import { getTvSeasonCredits, getTvSeasonDetails } from "../controllers";

import { Router } from "express";

export const router = Router();

const season = '/:tvId/season/:seasonId';

router.get(season, getTvSeasonDetails);

router.get(`${season}/credits`, getTvSeasonCredits);