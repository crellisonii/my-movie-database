import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvEpisodesOptions } from "../helpers";

export const getTvEpisodeDetails = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "GET");
	getTmdbData(res, options);
};

export const getTvEpisodeCredits = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "GET", "/credits");
	getTmdbData(res, options);
};

export const getTvEpisodeExternalIds = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "GET", "/external_ids");
	getTmdbData(res, options);
};

export const getTvEpisodeImages = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "GET", "/images");
	getTmdbData(res, options);
};

export const getTvEpisodeVideos = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "GET", "/videos");
	getTmdbData(res, options);
};
