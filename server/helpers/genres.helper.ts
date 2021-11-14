import { GenresInput, GenresParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";

const genrePath = "/genre";

const getGenreUrl = (pathParams: string): string => {
	return `${genrePath}${pathParams}`;
};

const getGenreParams = (req: Request): GenresParams => {
	const { language }: GenresInput = req.query;
	return {
		language: language ? language : "en-US",
	};
};

export const getGenreOptions = (
	req: Request,
	pathString: string
): UrlOptions => {
	const params = getGenreParams(req);
	const pathParams = getGenreUrl(pathString);
	return { axiosConfig: { params }, pathParams };
};
