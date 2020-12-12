import { AxiosPromise, AxiosRequestConfig, Method } from 'axios';
import { PeopleInput, PeopleQueryString } from "../interfaces/people.interface";
import { Request, Response } from "express";

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

const getOptions = (params: PeopleQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  }
}

const getData = (req: Request, method: Method, pathParams = ''): AxiosPromise => {
  const id = getId(req);
  const url = getUrl(id, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url, method);
  return getTmdbData(options);
}

export const getPersonDetails = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonMovieCredits = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/movie_credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonTvCredits = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/tv_credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonCombinedCredits = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/combined_credits');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonExternalIds = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/external_ids');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonImages = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getPersonTaggedImages = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET', '/tagged_images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}