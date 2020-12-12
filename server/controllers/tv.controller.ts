import { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import { Request, Response } from "express";
import { TVInput, TVQueryString } from "../interfaces";

import { apiKey } from "../env";
import { assign } from 'lodash';
import { baseUrl } from '../constants/url.constant';
import { getTmdbData } from "../services";

const getId = (req: Request): string => {
  return req.params.tvId ? req.params.tvId : '';
}

const getUrl = (id: string, pathParams: string): string => {
  return `${baseUrl}/tv/${id}${pathParams}`;
}

const getParams = (req: Request): TVQueryString => {
  const { append_to_response, language, page }: TVInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  params = page ? assign(params, { page }) : params;
  return params;
}

const getOptions = (params: TVQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  };
}

const getData = (req: Request, method: Method, pathParams = ''): AxiosPromise => {
  const id = getId(req);
  const url = getUrl(id, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url, method);
  return getTmdbData(options);
}

export const getTVDetails = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVCredits = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVEpisodeGroups = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/episode_groups');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVExternalIds = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/external_ids');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVImages = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVRecommendations = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/recommendations');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVReviews = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/reviews');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVSimilar = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/similar');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVVideos = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/videos');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVLatest = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/latest');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVPopular = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/popular');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTVTopRated = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/top_rated');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}