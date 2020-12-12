import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { NextFunction, Request, Response } from "express";
import { PeopleInput, PeopleQueryString } from "../interfaces/people.interface";

import { apiKey } from '../env';
import { assign } from 'lodash'
import { baseUrl } from '../constants/url.constant';
import { getTmdbData } from "../services";

const getId = (req: Request): string => {
  return req.params.personId;
}

const getUrl = (id: string, urlSuffix?: string): string => {
  let url = `${baseUrl}/person/${id}`;
  return urlSuffix ? `${url}${urlSuffix}` : url;
}

const getParams = (req: Request): PeopleQueryString => {
  const { append_to_response, language, page }: PeopleInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  params = page ? assign(params, { page }) : params;
  return params;
}

const getOptions = (params: PeopleQueryString, url: string): AxiosRequestConfig => {
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

export const getPersonDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonMovieCredits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/movie_credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonTvCredits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/tv_credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonCombinedCredits = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/combined_credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonExternalIds = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/external_ids');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonTaggedImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/tagged_images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}