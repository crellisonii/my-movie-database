import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvOptions } from "../helpers";

export const getTVDetails = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET");
	getTmdbData(res, options);
};

export const getTVCredits = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/credits");
	getTmdbData(res, options);
};

export const getTVEpisodeGroups = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/episode_groups");
	getTmdbData(res, options);
};

export const getTVExternalIds = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/external_ids");
	getTmdbData(res, options);
};

export const getTVImages = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/images");
	getTmdbData(res, options);
};

export const getTVRecommendations = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/recommendations");
	getTmdbData(res, options);
};

export const getTVReviews = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/reviews");
	getTmdbData(res, options);
};

export const getTVSimilar = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/similar");
	getTmdbData(res, options);
};

export const getTVVideos = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/videos");
	getTmdbData(res, options);
};

export const getTVLatest = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/latest");
	getTmdbData(res, options);
};

export const getTVPopular = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/popular");
	getTmdbData(res, options);
};

export const getTVTopRated = (req: Request, res: Response) => {
	const options = getTvOptions(req, "GET", "/top_rated");
	getTmdbData(res, options);
};
