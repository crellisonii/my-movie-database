import { TvEpisodeGroupParams, TvEpisodeInput } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";

const episodeGroupPath = "/tv/episode_group";

const getTvEpisodeGroupsId = (req: Request): string => {
	return req.params.episodeGroupId ? req.params.episodeGroupId : "";
};

const getTvEpisodeGroupsUrl = (id: string): string => {
	return `${episodeGroupPath}/${id}`;
};

const getTvEpisodeGroupsParams = (req: Request): TvEpisodeGroupParams => {
	const { language }: TvEpisodeInput = req.query;
	return {
		language: language ? language : "en-US",
	};
};

export const getTvEpisodeGroupsOptions = (req: Request): UrlOptions => {
	const id = getTvEpisodeGroupsId(req);
	const params = getTvEpisodeGroupsParams(req);
	const pathParams = getTvEpisodeGroupsUrl(id);
	return { axiosConfig: { params }, pathParams };
};
