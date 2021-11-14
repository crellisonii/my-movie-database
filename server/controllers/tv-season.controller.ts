import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvSeasonOptions } from "../helpers/tv-season.helper";

export const getTvSeasonDetails = (req: Request, res: Response) => {
	const options = getTvSeasonOptions(req);
	getTmdbData(res, options);
};

export const getTvSeasonAggregateCredits = (req: Request, res: Response) => {
	const options = getTvSeasonOptions(req, "/aggregate_credits");
	getTmdbData(res, options);
};

export const getTvSeasonCredits = (req: Request, res: Response) => {
	const options = getTvSeasonOptions(req, "/credits");
	getTmdbData(res, options);
};

export const getTvSeasonExternalIds = (req: Request, res: Response) => {
	const options = getTvSeasonOptions(req, "/external_ids");
	getTmdbData(res, options);
};

export const getTvSeasonImages = (req: Request, res: Response) => {
	const options = getTvSeasonOptions(req, "/images");
	getTmdbData(res, options);
};

export const getTvSeasonVideos = (req: Request, res: Response) => {
	const options = getTvSeasonOptions(req, "/videos");
	getTmdbData(res, options);
};
