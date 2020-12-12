import { AxiosPromise, AxiosRequestConfig, Method } from 'axios';
import { Request, Response } from 'express';

import { CreditsQueryString } from '../interfaces/credits.interface';
import { apiKey } from '../env';
import { baseUrl } from '../constants';
import { getTmdbData } from '../services';

const getId = (req: Request): string => {
  return req.params.creditId;
}

const getUrl = (id: string): string => {
  return `${baseUrl}/credit/${id}`;
}

const getParams = (req: Request): CreditsQueryString => {
  return {
    api_key: apiKey
  };
}

const getOptions = (params: CreditsQueryString, url: string, method: Method): AxiosRequestConfig => {
  return {
    method,
    params,
    url
  };
}

const getData = (req: Request, method: Method): AxiosPromise<any> => {
  const id = getId(req);
  const url = getUrl(id);
  const params = getParams(req);
  const options = getOptions(params, url, method);
  return getTmdbData(options);
}

export const getCredits = async (req: Request, res: Response) => {
  try {
    const resp = await getData(req, 'GET');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}