import { NextFunction, Request, Response } from "express";
import { PeopleInput, PeopleQueryString } from "../interfaces/people.interface";
import axios, { AxiosRequestConfig } from 'axios';

import { apiKey } from '../env';
import { assign } from 'lodash'
import { baseUrl } from '../constants/url.constant';

const getId = (req: Request): string => {
  return req.params.personId;
}

const getUrl = (id: string, urlSuffix?: string): string => {
  let url = `${baseUrl}/person/${id}`;
  return urlSuffix ? `${url}/${urlSuffix}` : url;
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

export const getPersonDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = getId(req);
    const url = getUrl(id);
    const params = getParams(req);
    const options = getOptions(params, url);
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    throw new Error(e);
  }
}