import { Arg, Query, Resolver } from "type-graphql";
import { SearchCollections, SearchMovies, SearchPeople, SearchTVShows } from './types';
import { SearchCollectionsInput, SearchMoviesInput, SearchPeopleInput, SearchTVInput } from './input';
import { baseUrl } from '../../constants/url.constant';
import axios, { AxiosRequestConfig } from 'axios';
import { apiKey } from '../../env';


@Resolver()
export class SearchResolver {

  searchUrl = `${baseUrl}search/`;

  apiKey = apiKey;

  @Query(returns => SearchCollections)
  async searchCollections(@Arg("input") input: SearchCollectionsInput): Promise<SearchCollections> {
    try {
      console.log('searchCollections input: ', input);
      const url = `${this.searchUrl}collection`;
      const { language, page, query } = input;
      let params = {
        api_key: apiKey,
        page,
        query
      };
      params = language ? Object.assign(params, { language }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      };
      console.log('searchCollections options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }

  @Query(returns => SearchMovies)
  async searchMovies(@Arg("input") input: SearchMoviesInput): Promise<SearchMovies> {
    try {
      console.log('searchMovies input: ', input);
      const url = `${this.searchUrl}movie`;
      const { include_adult, language, page, primary_release_year, query, region, year} = input;
      let params = {
        api_key: apiKey,
        page,
        query
      };
      params = include_adult ? Object.assign(params, { include_adult }) : params;
      params = language ? Object.assign(params, { language }) : params;
      params = primary_release_year ? Object.assign(params, { primary_release_year }) : params;
      params = region ? Object.assign(params, { region }) : params;
      params = year ? Object.assign(params, { year }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      };
      console.log('searchMovies options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }

  @Query(returns => SearchPeople)
  async searchPeople(@Arg("input") input: SearchPeopleInput): Promise<SearchPeople> {
    try {
      console.log('searchPeople input: ', input);
      const url = `${this.searchUrl}person`;
      const { include_adult, language, page, query, region } = input;
      let params = {
        api_key: apiKey,
        page,
        query
      };
      params = include_adult ? Object.assign(params, { include_adult }) : params;
      params = language ? Object.assign(params, { language }) : params;
      params = region ? Object.assign(params, { region }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      };
      console.log('searchPeople options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }

  @Query(returns => SearchTVShows)
  async searchTVShows(@Arg("input") input: SearchTVInput): Promise<SearchTVShows> {
    try {
      console.log('searchTVShows input: ', input);
      const url = `${this.searchUrl}tv`;
      const { first_air_date_year, include_adult, language, page, query } = input;
      let params = {
        api_key: apiKey,
        page,
        query
      };
      params = first_air_date_year ? Object.assign(params, { first_air_date_year }) : params;
      params = include_adult ? Object.assign(params, { include_adult }) : params;
      params = language ? Object.assign(params, { language }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      };
      console.log('searchTVShows options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }
}