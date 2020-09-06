import { Resolver, Query, Arg } from "type-graphql";
import axios, { AxiosRequestConfig } from 'axios';
import { Collection, CollectionImages } from "./types";
import { CollectionInput } from './input';
import { baseUrl } from '../../constants/url.constant';
import { apiKey } from '../../env';


@Resolver()
export class CollectionsResolver {

  collectionUrl = 'collection/';

  @Query(returns => Collection)
  async getCollection(
    @Arg("collectionInput") input: CollectionInput
    ): Promise<Collection> {
    try {
      console.log('get collection details input: ', input);
      const url = `${baseUrl}${this.collectionUrl}${input.collectionId}`;
      const params = {
        api_key: apiKey,
        language: input.language
      };
      const options: AxiosRequestConfig = {
        url,
        params
      };
      console.log('get collection details options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log("Error: ", e);
      throw new Error(e);
    }

  }

  @Query(returns => CollectionImages)
  async getCollectionImages(
    @Arg("collectionInput") input: CollectionInput
  ): Promise<CollectionImages> {
    try {
      console.log('get collection images input: ', input);
      const url = `${baseUrl}${this.collectionUrl}${input.collectionId}/images`;
      const params = {
        api_key: apiKey,
        language: input.language
      };
      const options: AxiosRequestConfig = {
        url,
        params
      };
      console.log('get collection image options: ', options);
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('Error: ', e);
      throw new Error(e);
    }
  }

}