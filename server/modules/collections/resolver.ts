import { CollectionResult } from './types';
import { Arg, Query, Resolver } from "type-graphql";
import { apiKey } from '../../env';
import { baseUrl } from '../../constants/url.constant';
import { CollectionInput } from './input';
import axios, { AxiosRequestConfig } from 'axios';

@Resolver()
export class CollectionResolver {

  collectionUrl = `${baseUrl}collection/`;

  api_key = apiKey;

  @Query(returns => CollectionResult)
  async getCollection(@Arg("input") input: CollectionInput): Promise<CollectionResult> {
    try {
      console.log('getCollection input: ', input);
      const { collection_id, language } = input;
      const url = `${this.collectionUrl}${collection_id}`;
      let params = { api_key: this.api_key };
      params = language ? Object.assign(params, { language }) : params;
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      };
      console.log('getCollection options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('getCollection error: \n', e);
      throw new Error(e);
    }
  }

}