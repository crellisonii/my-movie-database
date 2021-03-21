import { AxiosRequestConfig, Method } from "axios";
import { TvEpisodeGroupParams, TvEpisodeInput } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { getTvEpisodeGroupPathParams } from "./url-builder.helper";

const getTvEpisodeGroupsId = (req: Request): string => {
  return req.params.episodeGroupId ? req.params.episodeGroupId : '';
}

const getTvEpisodeGroupsUrl = (id: string): string => {
  return `${getTvEpisodeGroupPathParams(id)}`;
}

const getTvEpisodeGroupsParams = (req: Request): TvEpisodeGroupParams => {
  const { language }: TvEpisodeInput = req.query;
  return {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
}

export const getTvEpisodeGroupsOptions = (req: Request, method: Method): AxiosRequestConfig => {
  const id = getTvEpisodeGroupsId(req);
  const params = getTvEpisodeGroupsParams(req);
  const url = getTvEpisodeGroupsUrl(id);
  return { method, params, url };
}