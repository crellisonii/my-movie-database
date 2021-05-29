import { Request, Response } from "express";

import { getCollectionsOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getCollectionsDetails = (req: Request, res: Response) => {
	const options = getCollectionsOptions(req, "GET");
	getTmdbData(res, options);
};

export const getCollectionsImages = (req: Request, res: Response) => {
	const options = getCollectionsOptions(req, "GET", "/images");
	getTmdbData(res, options);
};

export const getCollectionsTranslations = (req: Request, res: Response) => {
	const options = getCollectionsOptions(req, "GET", "/translations");
	getTmdbData(res, options);
};
