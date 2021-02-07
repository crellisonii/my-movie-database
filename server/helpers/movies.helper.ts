import { AxiosRequestConfig, Method } from "axios";
import { MovieInput, MovieParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { assign } from "lodash";
import { baseUrl } from "../constants";

const getMovieId = (req: Request): string => {
  return req.params.movieId ? req.params.movieId : '';
}

const getMovieUrl = (id: string, pathParams: string): string => {
  return `${baseUrl}/movie/${id}${pathParams}`;
}

const getMovieParams = (req: Request): MovieParams => {
  const { append_to_response, language, page, region }: MovieInput = req.query;
  let params = {
    api_key: apiKey,
  };
  params = language ? assign(params, { language: language ? language : 'en-US' }) : params;
  params = append_to_response ? assign(params, { append_to_response }) : params;
  params = page ? assign(params, { page }) : params;
  params = region ? assign(params, { region }) : params;
  return params;
}

export const getMovieOptions = (req: Request, method: Method, pathParams: string = ''): AxiosRequestConfig => {
  const id = getMovieId(req);
  const params = getMovieParams(req);
  const url = getMovieUrl(id, pathParams);
  return { method, params, url };
}