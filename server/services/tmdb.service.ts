import axios, { AxiosRequestConfig } from 'axios';
import { baseURL, configurationUrl, imageUrl } from "../constants";

import { Response } from 'express';

export const getTmdbData = async (res: Response, options: AxiosRequestConfig) => {
  try {
    const getAxios = axios.create({
      baseURL
    });
    const resp = await getAxios(options);
    res.json(resp.data);
  }
  catch (e) {
    const errorData = e.response.data;
    res.json(errorData);
  }
}

export const getTmdbImages = async (res: Response, options: AxiosRequestConfig) => {
  try {
    const getAxios = axios.create({
      baseURL: imageUrl
    });
    const resp = await getAxios(options);
    res.json(resp.data);
  }
  catch (e) {
    const errorData = e.response.data;
    res.json(errorData);
  }
}

export const getTmdbConfiguration = async (res: Response, options: AxiosRequestConfig) => {
  try {
    const getAxios = axios.create({
      baseURL: configurationUrl
    });
    const resp = await getAxios(options);
    res.json(resp.data);
  }
  catch (e) {
    const errorData = e.response.data;
    res.json(errorData);
  }
}