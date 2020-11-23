import { CollectionInput, CollectionQueryString } from '../interfaces';
import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const collectionUrl = 'collection'

export const getCollectionsDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.collectionId;
    const { language }: CollectionInput = req.query;
    const url = `${baseUrl}${collectionUrl}/${id}`;
    const params: CollectionQueryString = {
      api_key: apiKey,
      language: language ? language : 'en-US'
    };
    const options: AxiosRequestConfig = {
      method: 'GET',
      params,
      url
    };
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    // console.log('getCollection error: \n', e);
    throw new Error(e);
  }
}

export const getCollectionsImages = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.collectionId;
  const { language }: CollectionInput = req.query;
  const url = `${baseUrl}${collectionUrl}/${id}/images`;
  const params: CollectionQueryString = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  }
  const options: AxiosRequestConfig = {
    method: 'GET',
    params,
    url
  };
  const resp = await axios(options);
  res.json(resp.data);
}