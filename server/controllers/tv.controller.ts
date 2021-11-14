import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvOptions } from "../helpers";

export const getTVDetails = (req: Request, res: Response) => {
	const options = getTvOptions(req);
	getTmdbData(res, options);
};

export const getTVCredits = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/credits");
	getTmdbData(res, options);
};

export const getTVEpisodeGroups = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/episode_groups");
	getTmdbData(res, options);
};

export const getTVExternalIds = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/external_ids");
	getTmdbData(res, options);
};

export const getTVImages = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/images");
	getTmdbData(res, options);
};

export const getTVRecommendations = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/recommendations");
	getTmdbData(res, options);
};

export const getTVReviews = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/reviews");
	getTmdbData(res, options);
};

export const getTVSimilar = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/similar");
	getTmdbData(res, options);
};

export const getTVVideos = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/videos");
	getTmdbData(res, options);
};

export const getTVLatest = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/latest");
	getTmdbData(res, options);
};

export const getTVPopular = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/popular");
	getTmdbData(res, options);
};

export const getTVTopRated = (req: Request, res: Response) => {
	const options = getTvOptions(req, "/top_rated");
	getTmdbData(res, options);
};
