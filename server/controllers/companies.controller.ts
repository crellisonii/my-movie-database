import { Request, Response } from "express";

import { getCompanyOptions } from "../helpers";
import { getTmdbData } from "../services/tmdb.service";

export const getCompanyDetails = (req: Request, res: Response) => {
	console.log("getCompanyDetails called!!");
	const options = getCompanyOptions(req, "GET");
	getTmdbData(res, options);
};

export const getCompanyAlternativeNames = (req: Request, res: Response) => {
	console.log("getCompanyAlternativeNames called!!");
	const options = getCompanyOptions(req, "GET", "/alternative_names");
	getTmdbData(res, options);
};

export const getCompanyImages = (req: Request, res: Response) => {
	console.log("getCompanyImages called!!");
	const options = getCompanyOptions(req, "GET", "/images");
	getTmdbData(res, options);
};
