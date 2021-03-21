import { AxiosRequestConfig, Method } from "axios";
import { PeopleInput, PeopleParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { assign } from "lodash";
import { getPeoplePathParams } from "./url-builder.helper";

const getPeopleId = (req: Request): string => {
  return req.params.personId ? req.params.personId : '';
}

const getPeopleUrl = (id: string, pathParams: string): string => {
  return `${getPeoplePathParams(id)}${pathParams}`;
}

const getPeopleParams = (req: Request): PeopleParams => {
  const { append_to_response, language, page }: PeopleInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  params = page ? assign(params, { page }) : params;
  return params;
}

export const getPeopleOptions = (req: Request, method: Method, pathParams: string = ''): AxiosRequestConfig => {
  const id = getPeopleId(req);
  const params = getPeopleParams(req);
  const url = getPeopleUrl(id, pathParams);
  return { method, params, url };
}