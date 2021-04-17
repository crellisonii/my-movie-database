import { Request, Response } from "express";

import { getGenreOptions } from "../helpers/genres.helper";
import { getTmdbData } from "../services";

export const getGenresMovie = (req: Request, res: Response) => {
	const options = getGenreOptions(req, "/movie/list", "GET");
	getTmdbData(res, options);
};

export const getGenresTV = (req: Request, res: Response) => {
	const options = getGenreOptions(req, "/tv/list", "GET");
	getTmdbData(res, options);
};
