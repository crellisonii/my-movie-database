import { Router } from "express";
import { getTvEpisodeDetails } from "../controllers";

export const router = Router();

const episode = `:tvId/season/:seasonId/episode/:episodeId`;

router.get(episode, getTvEpisodeDetails);