import { getTvEpisodeCredits, getTvEpisodeDetails } from "../controllers";

import { Router } from "express";

export const router = Router();

const episode = `:tvId/season/:seasonId/episode/:episodeId`;

router.get(episode, getTvEpisodeDetails);

router.get(`${episode}/credits`, getTvEpisodeCredits);