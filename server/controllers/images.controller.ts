import { Request, Response } from "express";

import { getImagesOptions } from "../helpers";
import { getTmdbImages } from "../services";

export const getImages = (req: Request, res: Response) => {
	const options = getImagesOptions(req, "GET");
	getTmdbImages(res, options);
};
