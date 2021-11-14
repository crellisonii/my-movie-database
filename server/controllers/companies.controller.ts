import { Request, Response } from "express";

import { getCompanyOptions } from "../helpers";
import { getTmdbData } from "../services/tmdb.service";

export const getCompanyDetails = (req: Request, res: Response) => {
	const options = getCompanyOptions(req);
	getTmdbData(res, options);
};

export const getCompanyAlternativeNames = (req: Request, res: Response) => {
	const options = getCompanyOptions(req, "/alternative_names");
	getTmdbData(res, options);
};

export const getCompanyImages = (req: Request, res: Response) => {
	const options = getCompanyOptions(req, "/images");
	getTmdbData(res, options);
};
