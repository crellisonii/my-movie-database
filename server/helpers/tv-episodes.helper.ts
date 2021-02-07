import { AxiosRequestConfig, Method } from "axios";
import { TvEpisodeInput, TvEpisodeParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { assign } from "lodash";
import { baseUrl } from "../constants";

const getTvEpisodesTvId = (req: Request): string => {
  return req.params.tvId ? req.params.tvId : '';
}

const getTvEpisodesSeasonNumber = (req: Request): string => {
  return req.params.seasonNumber ? req.params.seasonNumber : '';
}

const getTvEpisodesEpisodeNumber = (req: Request): string => {
  return req.params.episodeNumber ? req.params.episodeNumber : '';
}

const getTvEpisodesUrl = (tvId: string, seasonNumber: string, episodeNumber: string, pathParams: string): string => {
  return `${baseUrl}/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}${pathParams}`;
}

const getTvEpisodesParams = (req: Request): TvEpisodeParams => {
  const { append_to_response, language }: TvEpisodeInput = req.query;
  let params: TvEpisodeParams = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  return params;
}

export const getTvEpisodesOptions = (req: Request, method: Method, pathParams: string = ''): AxiosRequestConfig => {
  const tvId = getTvEpisodesTvId(req);
  const seasonNumber = getTvEpisodesSeasonNumber(req);
  const episodeNumber = getTvEpisodesEpisodeNumber(req);
  const params = getTvEpisodesParams(req);
  const url = getTvEpisodesUrl(tvId, seasonNumber, episodeNumber, pathParams);
  return { method, params, url };
}