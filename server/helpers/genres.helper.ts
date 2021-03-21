import { AxiosRequestConfig, Method } from "axios";
import { GenresInput, GenresParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { getGenrePathParams } from "./url-builder.helper";

const getGenreUrl = (pathParams: string): string => {
  return `${getGenrePathParams()}${pathParams}`;
}

const getGenreParams = (req: Request): GenresParams => {
  const { language }: GenresInput = req.query;
  return {
    api_key: apiKey,
    language: language ? language : 'en-US'
  };
}

export const getGenreOptions = (req: Request, pathParams: string, method: Method): AxiosRequestConfig => {
  const params = getGenreParams(req);
  const url = getGenreUrl(pathParams);
  return { method, params, url };
}