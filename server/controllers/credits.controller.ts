import { NextFunction, Request, Response } from 'express';
import axios, { AxiosRequestConfig } from 'axios';

import { CreditsQueryString } from '../interfaces/credits.interface';
import { apiKey } from '../env';
import { baseUrl } from '../constants/url.constant';

const creditsUrl = 'credit';

export const getCredits = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.creditId;
  const url = `${baseUrl}${creditsUrl}/${id}`;
  const params: CreditsQueryString = {
    api_key: apiKey
  };
  const options: AxiosRequestConfig = {
    method: 'GET',
    params,
    url
  };
  const resp = await axios(options);
  res.json(resp.data);
}