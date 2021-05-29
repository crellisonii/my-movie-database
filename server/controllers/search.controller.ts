import { Request, Response } from "express";

import { getSearchOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getSearchCollections = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/collection", "GET");
	getTmdbData(res, options);
};

export const getSearchCompanies = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/company", "GET");
	getTmdbData(res, options);
};

export const getSearchMovies = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/movie", "GET");
	getTmdbData(res, options);
};

export const getSearchMulti = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/multi", "GET");
	getTmdbData(res, options);
};

export const getSearchPerson = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/person", "GET");
	getTmdbData(res, options);
};

export const getSearchTV = (req: Request, res: Response) => {
	const options = getSearchOptions(req, "/tv", "GET");
	getTmdbData(res, options);
};
