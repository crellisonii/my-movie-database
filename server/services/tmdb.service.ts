import axios, { AxiosRequestConfig } from 'axios';

import { Response } from 'express';

export const getTmdbData = async (res: Response, options: AxiosRequestConfig) => {
  try {
    const resp = await axios(options);
    res.json(resp.data);
  }
  catch (e) {
    const errorData = e.response.data;
    res.json(errorData);
  }
}