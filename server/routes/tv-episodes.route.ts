import {
	getTvEpisodeCredits,
	getTvEpisodeDetails,
	getTvEpisodeExternalIds,
	getTvEpisodeImages,
	getTvEpisodeVideos,
} from "../controllers";

import { Router } from "express";

export const router = Router();

const episode = `:tvId/season/:seasonNumber/episode/:episodeNumber`;

router.get(episode, getTvEpisodeDetails);

router.get(`${episode}/credits`, getTvEpisodeCredits);

router.get(`${episode}/external_ids`, getTvEpisodeExternalIds);

router.get(`${episode}/images`, getTvEpisodeImages);

router.get(`${episode}/videos`, getTvEpisodeVideos);
