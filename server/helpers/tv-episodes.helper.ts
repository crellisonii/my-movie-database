import { TvEpisodeInput, TvEpisodeParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { assign } from "lodash";

const tvPath = "/tv";
const seasonPath = "/season";
const episodePath = "/episode";

const getTvEpisodesTvId = (req: Request): string => {
	return req.params.tvId ? req.params.tvId : "";
};

const getTvEpisodesSeasonNumber = (req: Request): string => {
	return req.params.seasonNumber ? req.params.seasonNumber : "";
};

const getTvEpisodesEpisodeNumber = (req: Request): string => {
	return req.params.episodeNumber ? req.params.episodeNumber : "";
};

const getTvEpisodesUrl = (
	tvId: string,
	seasonNumber: string,
	episodeNumber: string,
	pathParams: string
): string => {
	const tvString = `${tvPath}/${tvId}`;
	const seasonString = `${seasonPath}/${seasonNumber}`;
	const episodeString = `${episodePath}/${episodeNumber}`;
	return `${tvString}${seasonString}${episodeString}${pathParams}`;
};

const getTvEpisodesParams = (req: Request): TvEpisodeParams => {
	const { append_to_response, language }: TvEpisodeInput = req.query;
	let params: TvEpisodeParams = {
		language: language ? language : "en-US",
	};
	params = append_to_response ? assign(params, { append_to_response }) : params;
	return params;
};

export const getTvEpisodesOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const tvId = getTvEpisodesTvId(req);
	const seasonNumber = getTvEpisodesSeasonNumber(req);
	const episodeNumber = getTvEpisodesEpisodeNumber(req);
	const params = getTvEpisodesParams(req);
	const pathParams = getTvEpisodesUrl(
		tvId,
		seasonNumber,
		episodeNumber,
		pathString
	);
	return { axiosConfig: { params }, pathParams };
};
