import { AxiosRequestConfig, Method } from "axios";
import { TVInput, TVParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { assign } from "lodash";
import { getTvPathParams } from "./url-builder.helper";

const getTvId = (req: Request): string => {
  return req.params.tvId ? req.params.tvId : '';
}

const getTvUrl = (id: string, pathParams: string): string => {
  return `${getTvPathParams(id)}${pathParams}`;
}

const getTvParams = (req: Request): TVParams => {
  const { append_to_response, language, page }: TVInput = req.query;
  let params = {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
  params = append_to_response ? assign(params, { append_to_response }) : params;
  params = page ? assign(params, { page }) : params;
  return params;
}

export const getTvOptions = (req: Request, method: Method, pathParams: string = ''): AxiosRequestConfig => {
  const tvId = getTvId(req);
  const params = getTvParams(req);
  const url = getTvUrl(tvId, pathParams);
  return { method, params, url };
}