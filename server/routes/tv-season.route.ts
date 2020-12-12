import { Router } from "express";
import { getTvSeasonDetails } from "../controllers";

export const router = Router();

const tvId = '/:tvId';

const seasonId = '/:seasonId';

router.get(`${tvId}/season${seasonId}`, getTvSeasonDetails);