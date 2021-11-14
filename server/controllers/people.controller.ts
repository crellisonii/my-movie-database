import { Request, Response } from "express";

import { getPeopleOptions } from "../helpers/people.helper";
import { getTmdbData } from "../services";

export const getPersonDetails = (req: Request, res: Response) => {
	const options = getPeopleOptions(req);
	getTmdbData(res, options);
};

export const getPersonMovieCredits = (req: Request, res: Response) => {
	const options = getPeopleOptions(req, "/movie_credits");
	getTmdbData(res, options);
};

export const getPersonTvCredits = (req: Request, res: Response) => {
	const options = getPeopleOptions(req, "/tv_credits");
	getTmdbData(res, options);
};

export const getPersonCombinedCredits = (req: Request, res: Response) => {
	const options = getPeopleOptions(req, "/combined_credits");
	getTmdbData(res, options);
};

export const getPersonExternalIds = (req: Request, res: Response) => {
	const options = getPeopleOptions(req, "/external_ids");
	getTmdbData(res, options);
};

export const getPersonImages = (req: Request, res: Response) => {
	const options = getPeopleOptions(req, "/images");
	getTmdbData(res, options);
};

export const getPersonTaggedImages = (req: Request, res: Response) => {
	const options = getPeopleOptions(req, "/tagged_images");
	getTmdbData(res, options);
};
