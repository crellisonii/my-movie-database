import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { CollectionInput, CollectionQueryString } from '../interfaces';
import { NextFunction, Request, Response } from 'express';

import { apiKey } from '../env';
import { baseUrl } from '../constants';
import { getTmdbData } from '../services';

const getId = (req: Request): string => {
  return req.params.collectionId;
}

const getUrl = (id: string, pathParams: string): string => {
  return `${baseUrl}/collection/${id}${pathParams}`;
}

const getParams = (req: Request): CollectionQueryString => {
  const { language }: CollectionInput = req.query;
  return {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
}

const getOptions = (params: CollectionQueryString, url: string): AxiosRequestConfig => {
  return {
    method: 'GET',
    params,
    url
  };
}

const getData = (req: Request, pathParams = ''): AxiosPromise<any> => {
  const id = getId(req);
  const url = getUrl(id, pathParams);
  const params = getParams(req);
  const options = getOptions(params, url);
  return getTmdbData(options);
}

export const getCollectionsDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}

export const getCollectionsImages = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const resp = await getData(req, '/images');
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}