import { Router } from "express";
import { getTvEpisodeGroups } from "../controllers";

export const router = Router();

const episodeGroupId = '/:episodeGroupId';

router.get(episodeGroupId, getTvEpisodeGroups);