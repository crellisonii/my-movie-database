import { AxiosPromise, AxiosRequestConfig, Method } from "axios";
import { NextFunction, Request, Response } from "express";
import { SearchInput, SearchQueryString } from "../interfaces";

import { apiKey } from '../env';
import { assign } from 'lodash';
import { baseUrl } from '../constants';
import { getTmdbData } from "../services";

const getUrl = (pathParams: string): string => {
  return `${baseUrl}/search${pathParams}`;
}

const getParams = (req: Request): SearchQueryString => {
  const {
    first_air_date_year,
    include_adult,
    language,
    page,
    primary_release_year,
    query,
    region,
    year
  }: SearchInput = req.query;
  let params: SearchQueryString = {
    api_key: apiKey,
    query: query ? query : ''
  };
  console.log('getParams query: ', query);
  params = first_air_date_year ? assign(params, { first_air_date_year }) : params;
  params = include_adult ? assign(params, { include_adult }) : params;
  params = language ? assign(params, { language }) : params;
  params = page ? assign(params, { page }) : params;
  params = primary_release_year ? assign(params, { primary_release_year }) : params;
  params = region ? assign(params, { region }) : params;
  params = year ? assign(params, { year }) : params;
  return params;
}

const getOptions = (params: SearchQueryString, url: string, method: Method): AxiosRequestConfig => {
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
  return getTmdbData(options);
}

export const getSearchCollections = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/collection');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getSearchMovies = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/movie');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}