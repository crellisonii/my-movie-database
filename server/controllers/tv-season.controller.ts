import { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import { Request, Response } from "express";
import { TvSeasonInput, TvSeasonQueryString } from "../interfaces";

import { apiKey } from '../env';
import { assign } from 'lodash';
import { baseUrl } from '../constants/url.constant';
import { getTmdbData } from "../services";

const getTvId = (req: Request): string => {
  console.log('req.params: ', req.params);
  return req.params.tvId ? req.params.tvId : '';
}

const getSeasonId = (req: Request): string => {
  console.log('getSeasonId: ', req.params.seasonId);
  return req.params.seasonId ? req.params.seasonId : '';
}

const getUrl = (tvId: string, seasonId: string, pathParams: string): string => {
  return `${baseUrl}/tv/${tvId}/season/${seasonId}${pathParams}`;
}

const getParams = (req: Request): TvSeasonQueryString => {
  const { append_to_response, language }: TvSeasonInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  return params;
}

const getOptions = (params: TvSeasonQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  };
}

const getData = (req: Request, method: Method, pathParams = ''): AxiosPromise => {
  const tvId = getTvId(req);
  const seasonId = getSeasonId(req);
  const url = getUrl(tvId, seasonId, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url, method);
  return getTmdbData(options);
}

export const getTvSeasonDetails = async (req: Request, res: Response) => {
  console.log('getTvSeasonDetails called!!')
  try {
    const resp = await getData(req, 'GET');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}