import { Request, Response } from "express";

import { getCreditsOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getCredits = (req: Request, res: Response) => {
	const options = getCreditsOptions(req);
	getTmdbData(res, options);
};
