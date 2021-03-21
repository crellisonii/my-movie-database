import { AxiosRequestConfig, Method } from "axios";
import { TvSeasonInput, TvSeasonParams } from "../interfaces";
import { getTvPathParams, getTvSeasonPathParams } from "./url-builder.helper";

import { Request } from "express";
import { apiKey } from "../env";
import { assign } from "lodash";

const getTvSeasonTvId = (req: Request): string => {
  return req.params.tvId ? req.params.tvId : '';
}

const getTvSeasonSeasonNumber = (req: Request): string => {
  return req.params.seasonNumber ? req.params.seasonNumber : '';
}

const getTvSeasonUrl = (tvId: string, seasonNumber: string, pathParams: string): string => {
  return `${getTvSeasonPathParams(tvId, seasonNumber)}${pathParams}`;
}

const getTvSeasonParams = (req: Request): TvSeasonParams => {
  const { append_to_response, language }: TvSeasonInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  return params;
}

export const getTvSeasonOptions = (req: Request, method: Method, pathParams: string = ''): AxiosRequestConfig => {
  const tvId = getTvSeasonTvId(req);
  const seasonNumber = getTvSeasonSeasonNumber(req);
  const params = getTvSeasonParams(req);
  const url = getTvSeasonUrl(tvId, seasonNumber, pathParams);
  return { method, params, url };
}