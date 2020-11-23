import { MovieDetailsQueryString, MovieInput } from '../interfaces/movies.interface';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const movieUrl = 'movie';

export const getMovieDetails = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.movieId;
  const { language }: MovieInput = req.query;
  const url = `${baseUrl}${movieUrl}/${id}`;
  const params: MovieDetailsQueryString = {
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