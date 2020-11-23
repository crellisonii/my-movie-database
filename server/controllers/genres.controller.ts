import { GenresInput, GenresQueryString } from '../interfaces/genres.interface';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const genresUrl = 'genre';

export const getMovieGenres = async (req: Request, res: Response, next: NextFunction) => {
  const { language }: GenresInput = req.query;
  const url = `${baseUrl}${genresUrl}/movie/list`;
  console.log('getMovieGenres url: ', url);
  const params: GenresQueryString = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  console.log('getMovieGenres params: ', params);
  const options: AxiosRequestConfig = {
    method: 'GET',
    params,
    url
  };
  console.log('getMovieGenres options: ', options);
  const resp = await axios(options);
  res.json(resp.data);
}

export const getTVGenres = async (req: Request, res: Response, next: NextFunction) => {
  const { language }: GenresInput = req.query;
  const url = `${baseUrl}${genresUrl}/tv/list`;
  const params: GenresQueryString = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  const options: AxiosRequestConfig = {
    method: 'GET',
    params,
    url
  };
  const resp = await axios(options);
  res.json(resp.data);
}