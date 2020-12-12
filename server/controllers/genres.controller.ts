import { AxiosPromise, AxiosRequestConfig, Method } from 'axios';
import { GenresInput, GenresQueryString } from '../interfaces/genres.interface';
import { Request, Response } from 'express';

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';
import { getTmdbData } from '../services';

const getUrl = (pathParams: string): string => {
  return `${baseUrl}/genre/${pathParams}`;
}

const getParams = (req: Request): GenresQueryString => {
  const { language }: GenresInput = req.query;
  return {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
}

const getOptions = (params: GenresQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  };
}

const getData = (req: Request, method: Method, pathParams: string): AxiosPromise => {
  const url = getUrl(pathParams);
  const params = getParams(req);
  const options = getOptions(params, url, method);
  const tmdbData = getTmdbData(options)
  return getTmdbData(options);
}

export const getMovieGenres = async (req: Request, res: Response) => {
  const resp = await getData(req, 'GET', '/movie/list');
  res.json(resp.data);
}

export const getTVGenres = async (req: Request, res: Response) => {
  const resp = await getData(req, 'GET', '/tv/list');
  res.json(resp.data);
}