import { TvSeasonInput, TvSeasonParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { assign } from "lodash";

const tvPath = "/tv";
const seasonPath = "/season";

const getTvSeasonTvId = (req: Request): string => {
	return req.params.tvId ? req.params.tvId : "";
};

const getTvSeasonSeasonNumber = (req: Request): string => {
	return req.params.seasonNumber ? req.params.seasonNumber : "";
};

const getTvSeasonUrl = (
	tvId: string,
	seasonNumber: string,
	pathParams: string
): string => {
	const tvString = `${tvPath}/${tvId}`;
	const seasonString = `${seasonPath}/${seasonNumber}`;
	return `${tvString}${seasonString}${pathParams}`;
};

const getTvSeasonParams = (req: Request): TvSeasonParams => {
	const { append_to_response, language }: TvSeasonInput = req.query;
	let params = {
		language: language ? language : "en-US",
	};
	params = append_to_response ? assign(params, { append_to_response }) : params;
	return params;
};

export const getTvSeasonOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const tvId = getTvSeasonTvId(req);
	const seasonNumber = getTvSeasonSeasonNumber(req);
	const params = getTvSeasonParams(req);
	const pathParams = getTvSeasonUrl(tvId, seasonNumber, pathString);
	return { axiosConfig: { params }, pathParams };
};
