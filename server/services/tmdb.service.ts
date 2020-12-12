import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export const getTmdbData = (options: AxiosRequestConfig): AxiosPromise<any> => {
  return axios(options);
}