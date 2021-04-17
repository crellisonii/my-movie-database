import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvEpisodeGroupsOptions } from "../helpers";

export const getTvEpisodeGroups = (req: Request, res: Response) => {
	const options = getTvEpisodeGroupsOptions(req, "GET");
	getTmdbData(res, options);
};
