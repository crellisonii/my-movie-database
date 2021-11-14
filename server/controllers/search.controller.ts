import { Request, Response } from "express";

import { getSearchOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getSearchCollections = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/collection");
	getTmdbData(res, options);
};

export const getSearchCompanies = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/company");
	getTmdbData(res, options);
};

export const getSearchMovies = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/movie");
	getTmdbData(res, options);
};

export const getSearchMulti = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/multi");
	getTmdbData(res, options);
};

export const getSearchPerson = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/person");
	getTmdbData(res, options);
};

export const getSearchTV = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/tv");
	getTmdbData(res, options);
};
