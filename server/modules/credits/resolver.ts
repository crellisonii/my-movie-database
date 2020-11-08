import { Arg, Query, Resolver } from "type-graphql";
import { baseUrl } from '../../constants/url.constant';
import { apiKey } from '../../env';
import { Credits } from "./types";
import { CreditsInput } from './input';
import axios, { AxiosRequestConfig } from 'axios';


@Resolver()
export class CreditsResolver {

  creditUrl = `${baseUrl}credit/`;

  api_key = apiKey;

  @Query(returns => Credits)
  async getCredits(@Arg("input") input: CreditsInput): Promise<Credits> {
    try {
      console.log('getCredits input: ', input);
      const { credit_id } = input;
      const url = `${this.creditUrl}${credit_id}`;
      const params = { api_key: this.api_key };
      const options: AxiosRequestConfig = {
        method: 'GET',
        params,
        url
      };
      const resp = await axios(options);
      return resp.data;
    }
    catch (e) {
      console.log('getCredits error: \n', e);
      throw new Error(e);
    }
  }

}