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

const getSeasonNumber = (req: Request): string => {
  return req.params.seasonNumber ? req.params.seasonNumber : '';
}

const getEpisodeNumber = (req: Request): string => {
  return req.params.episodeNumber ? req.params.episodeNumber : '';
}

const getUrl = (tvId: string, seasonNumber: string, episodeNumber: string, pathParams: string): string => {
  return `${baseUrl}/tv/${tvId}/season/${seasonNumber}/episode/${episodeNumber}${pathParams}`;
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
  const seasonNumber = getSeasonNumber(req);
  const episodeNumber = getEpisodeNumber(req);
  const url = getUrl(tvId, seasonNumber, episodeNumber, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url, method);
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

export const getTvEpisodeImages = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getTvEpisodeVideos = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/videos');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}