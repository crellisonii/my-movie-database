import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { MovieInput, MovieQueryString } from '../interfaces/movies.interface';
import { NextFunction, Request, Response } from 'express';

import { apiKey } from '../env';
import { assign } from 'lodash';
import { baseUrl } from '../constants';
import { getTmdbData } from '../services';

const getId = (req: Request): string => {
  return req.params.movieId ? req.params.movieId : '';
}

const getUrl = (id: string, urlSuffix?: string): string => {
  let url = `${baseUrl}/movie/${id}`;
  return urlSuffix ? `${url}/${urlSuffix}` : url;
}

const getParams = (req: Request): MovieQueryString => {
  const { append_to_response, language, page, region }: MovieInput = req.query;
  let params = {
    api_key: apiKey,
  };
  params = language ? assign(params, { language: language ? language : 'en-US' }) : params;
  params = append_to_response ? assign(params, { append_to_response }) : params;
  params = page ? assign(params, { page }) : params;
  params = region ? assign(params, { region }) : params;
  return params;
}

const getOptions = (params: MovieQueryString, url: string): AxiosRequestConfig => {
  return {
    method: 'GET',
    params,
    url
  }
}

const getData = (req: Request, pathParams = ''): AxiosPromise => {
  const id = getId(req);
  const url = getUrl(id, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url);
  return getTmdbData(options);
}

export const getMovieDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieCredits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieExternalIds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/external_ids');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieRecommendations = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/recommendations');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/reviews');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieSimilar = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/similar');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieVideos = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/videos');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieLatest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/latest');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieNowPlaying = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/now_playing');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMoviePopular = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/popular');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieTopRated = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/top_rated');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getMovieUpcoming = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/upcoming');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}