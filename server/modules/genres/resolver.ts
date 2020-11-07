import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from '../../constants/url.constant';
import { GenresResult } from './types';
import { apiKey } from '../../env';
import axios, { AxiosRequestConfig } from 'axios';
import { GenresInput } from './input';


@Resolver()
export class GenresResolver {

  genreUrl = `${baseUrl}genre/`;

  api_key = apiKey;

  @Query(returns => GenresResult)
  async getMovieGenres(@Arg("input") input: GenresInput): Promise<GenresResult> {
    try {
      console.log('getMovieGenres input: ', input);
      const { language } = input;
      const url = `${this.genreUrl}movie/list`;
      let params = { api_key: this.api_key };
      params = language ? Object.assign(params, { language }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      }
      console.log('getMovieGenres options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }

  @Query(returns => GenresResult)
  async getTVGenres(@Arg("input") input: GenresInput): Promise<GenresResult> {
    try {
      console.log('getTVGenres input: ', input);
      const { language } = input;
      const url = `${this.genreUrl}tv/list`;
      let params = { api_key: this.api_key };
      params = language ? Object.assign(params, { language }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      }
      console.log('getTVGenres options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }
}