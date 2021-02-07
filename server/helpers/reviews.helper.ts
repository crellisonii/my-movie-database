import { AxiosRequestConfig, Method } from "axios";

import { Request } from "express";
import { ReviewsParam } from "../interfaces";
import { apiKey } from "../env";
import { baseUrl } from "../constants";

const getReviewsId = (req: Request): string => {
  return req.params.reviewsId ? req.params.reviewsId : '';
}

const getReviewsUrl = (id: string): string => {
  return `${baseUrl}/review/${id}`;
}

const getReviewsParams = (): ReviewsParam => {
  return {
    api_key: apiKey
  };
}

export const getReviewsOptions = (req: Request, method: Method): AxiosRequestConfig => {
  const id = getReviewsId(req);
  const params = getReviewsParams();
  const url = getReviewsUrl(id);
  return { method, params, url };
}