import { AxiosRequestConfig, Method } from "axios";
import { GenresInput, GenresParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { baseUrl } from "../constants";

const getGenreUrl = (pathParams: string): string => {
  return `${baseUrl}/genre/${pathParams}`;
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