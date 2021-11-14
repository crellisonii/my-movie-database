import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvEpisodesOptions } from "../helpers";

export const getTvEpisodeDetails = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req);
	getTmdbData(res, options);
};

export const getTvEpisodeCredits = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "/credits");
	getTmdbData(res, options);
};

export const getTvEpisodeExternalIds = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "/external_ids");
	getTmdbData(res, options);
};

export const getTvEpisodeImages = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "/images");
	getTmdbData(res, options);
};

export const getTvEpisodeVideos = (req: Request, res: Response) => {
	const options = getTvEpisodesOptions(req, "/videos");
	getTmdbData(res, options);
};
