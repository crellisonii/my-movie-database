import { MovieInput, MovieQueryString } from '../interfaces/movies.interface';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import _ from 'lodash';
import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const getMovieId = (req: Request): string => {
  return req.params.movieId;
}

const getMovieUrl = (id: string, urlSuffix?: string): string => {
  let url = `${baseUrl}movie/${id}`;
  url = urlSuffix ? `${url}/${urlSuffix}` : url;
  return url;
}

const getParams = (req: Request): MovieQueryString => {
  const { append_to_response, language, page }: MovieInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US',
  };
  params = append_to_response ? _.assign(params, { append_to_response }) : params;
  params = page ? _.assign(params, { page }) : params;
  return params;
}

const getOptions = (params: MovieQueryString, url: string): AxiosRequestConfig => {
  return {
    method: 'GET',
    params,
    url
  }
}

export const getMovieDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id);
    let params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieCredits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id, 'credits');
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id, 'images');
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieRecommendations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id, 'recommendations');
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id, 'reviews');
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieSimilar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id, 'similar');
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieVideos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getMovieId(req);
    const url = getMovieUrl(id, 'videos');
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieLatest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const url = `${baseUrl}movie/latest`;
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}