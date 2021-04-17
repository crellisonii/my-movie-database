import { Request, Response } from "express";

import { getReviewsOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getReviewsDetails = (req: Request, res: Response) => {
	const options = getReviewsOptions(req, "GET");
	getTmdbData(res, options);
};
