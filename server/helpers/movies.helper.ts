import { MovieInput, MovieParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { assign } from "lodash";

const moviePath = "/movie";

const getMovieId = (req: Request): string => {
	return req.params.movieId ? req.params.movieId : "";
};

const getMovieUrl = (id: string, pathParams: string): string => {
	const movieString = `${moviePath}/${id}`;
	return `${movieString}${pathParams}`;
};

const getMovieParams = (req: Request): MovieParams => {
	const { append_to_response, language, page, region }: MovieInput = req.query;
	let params = {};
	params = language
		? assign(params, { language: language ? language : "en-US" })
		: params;
	params = append_to_response ? assign(params, { append_to_response }) : params;
	params = page ? assign(params, { page }) : params;
	params = region ? assign(params, { region }) : params;
	return params;
};

export const getMovieOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const id = getMovieId(req);
	const params = getMovieParams(req);
	const pathParams = getMovieUrl(id, pathString);
	return { axiosConfig: { params }, pathParams };
};
