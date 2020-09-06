import { Query, Resolver } from "type-graphql";
import axios, { AxiosRequestConfig } from 'axios';

import { Genres } from "./types";
import { apiKey } from '../../env';
import { baseUrl } from '../../constants/url.constant';

@Resolver()
export class GenreResolver {

  genreUrl = 'genre/';

  @Query(returns => Genres)
  async getMovieGenres(): Promise<Genres> {
    try {
      const url = `${baseUrl}${this.genreUrl}movie/list`;
      const params = {
        api_key: apiKey
      };
      const options: AxiosRequestConfig = {
        url,
        params
      };
      console.log('get movie genres options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log("Error: ", e);
      throw new Error(e);
    }
  }

  @Query(returns => Genres)
  async getTVShowGenres(): Promise<Genres> {
    try {
      const url = `${baseUrl}${this.genreUrl}tv/list`;
      const params = {
        api_key: apiKey
      };
      const options: AxiosRequestConfig = {
        url,
        params
      };
      console.log('get tv show genres options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }
}