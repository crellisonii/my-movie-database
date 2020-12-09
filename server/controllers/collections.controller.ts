import { CollectionInput, CollectionQueryString } from '../interfaces';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const getCollectionsId = (req: Request): string => {
  return req.params.collectionId;
}

const getUrl = (id: string, urlSuffix?: string): string => {
  let url = `${baseUrl}collection/${id}`;
  return urlSuffix ? `${url}/${urlSuffix}` : url;
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

export const getCollectionsDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getCollectionsId(req);
    const url = getUrl(id);
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    // console.log('getCollection error: \n', e);
    throw new Error(e);
  }
}

export const getCollectionsImages = async (req: Request, res: Response, next: NextFunction) => {
  const id = getCollectionsId(req);
  const url = getUrl(id, 'images');
  const params = getParams(req);
  const options = getOptions(params, url);
  const resp = await axios(options);
  res.json(resp.data);
}