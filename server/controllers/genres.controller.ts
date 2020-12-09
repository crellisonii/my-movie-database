import { GenresInput, GenresQueryString } from '../interfaces/genres.interface';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const getUrl = (urlSuffix: string): string => {
  return `${baseUrl}genre/${urlSuffix}`;
}

const getParams = (req: Request): GenresQueryString => {
  const { language }: GenresInput = req.query;
  return {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
}

const getOptions = (params: GenresQueryString, url: string): AxiosRequestConfig => {
  return {
    method: 'GET',
    params,
    url
  };
}

export const getMovieGenres = async (req: Request, res: Response, next: NextFunction) => {
  const url = getUrl('/movie/list');
  const params = getParams(req);
  const options = getOptions(params, url);
  const resp = await axios(options);
  res.json(resp.data);
}

export const getTVGenres = async (req: Request, res: Response, next: NextFunction) => {
  const url = getUrl('/tv/list');
  const params = getParams(req);
  const options = getOptions(params, url);
  const resp = await axios(options);
  res.json(resp.data);
}