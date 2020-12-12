import { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import { Request, Response } from "express";
import { TvEpisodeGroupQueryString, TvEpisodeInput } from "../interfaces";

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';
import { getTmdbData } from '../services/tmdb.service';

const getId = (req: Request): string => {
  return req.params.episodeGroupId ? req.params.episodeGroupId : '';
}

const getUrl = (id: string): string => {
  return `${baseUrl}/tv/episode_group/${id}`;
}

const getParams = (req: Request): TvEpisodeGroupQueryString => {
  const { language }: TvEpisodeInput = req.query;
  return {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
}

const getOptions = (params: TvEpisodeGroupQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  };
}

const getData = (req: Request, method: Method): AxiosPromise => {
  const id = getId(req);
  const url = getUrl(id);
  const params = getParams(req);
  const options = getOptions(params, url, method);
  return getTmdbData(options);
}

export const getTvEpisodeGroups = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}