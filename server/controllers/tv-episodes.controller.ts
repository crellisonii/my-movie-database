import { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import { Request, Response } from "express";
import { TvEpisodeInput, TvEpisodeQueryString } from "../interfaces";

import { apiKey } from '../env';
import { assign } from 'lodash';
import { baseUrl } from '../constants/url.constant';
import { getTmdbData } from "../services";

const getTvId = (req: Request): string => {
  return req.params.tvId ? req.params.tvId : '';
}

const getSeasonId = (req: Request): string => {
  return req.params.seasonId ? req.params.seasonId : '';
}

const getEpisodeId = (req: Request): string => {
  return req.params.episodeId ? req.params.episodeId : '';
}

const getUrl = (tvId: string, seasonId: string, episodeId: string, pathParams: string): string => {
  return `${baseUrl}/tv/${tvId}/season/${seasonId}/episode/${episodeId}${pathParams}`;
}

const getParams = (req: Request): TvEpisodeQueryString => {
  const { append_to_response, language }: TvEpisodeInput = req.query;
  let params: TvEpisodeQueryString = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  return params;
}

const getOptions = (params: TvEpisodeQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  };
}

const getData = (req: Request, method: Method, pathParams = ''): AxiosPromise => {
  const tvId = getTvId(req);
  const seasonId = getSeasonId(req);
  const episodeId = getEpisodeId(req);
  const url = getUrl(tvId, seasonId, episodeId, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url, 'GET');
  return getTmdbData(options);
}

export const getTvEpisodeDetails = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTvEpisodeCredits = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTvEpisodeExternalIds = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/external_ids');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}