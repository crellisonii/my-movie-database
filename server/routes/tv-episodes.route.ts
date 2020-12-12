import { getTvEpisodeCredits, getTvEpisodeDetails, getTvEpisodeExternalIds } from "../controllers";

import { Router } from "express";

export const router = Router();

const episode = `:tvId/season/:seasonId/episode/:episodeId`;

router.get(episode, getTvEpisodeDetails);

router.get(`${episode}/credits`, getTvEpisodeCredits);

router.get(`${episode}/external_ids`, getTvEpisodeExternalIds);