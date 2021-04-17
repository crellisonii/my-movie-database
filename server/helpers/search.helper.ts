import { AxiosRequestConfig, Method } from "axios";
import { SearchInput, SearchParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { assign } from "lodash";
import { getSearchPathParams } from "./url-builder.helper";

const getSearchUrl = (pathParams: string): string => {
	return `${getSearchPathParams}${pathParams}`;
};

const getSearchParams = (req: Request): SearchParams => {
	const {
		first_air_date_year,
		include_adult,
		language,
		page,
		primary_release_year,
		query,
		region,
		year,
	}: SearchInput = req.query;
	let params: SearchParams = {
		api_key: apiKey,
		query: query ? query : "",
	};
	params = first_air_date_year
		? assign(params, { first_air_date_year })
		: params;
	params = include_adult ? assign(params, { include_adult }) : params;
	params = language ? assign(params, { language }) : params;
	params = page ? assign(params, { page }) : params;
	params = primary_release_year
		? assign(params, { primary_release_year })
		: params;
	params = region ? assign(params, { region }) : params;
	params = year ? assign(params, { year }) : params;
	return params;
};

export const getSearchOptions = (
	req: Request,
	pathParams: string,
	method: Method
): AxiosRequestConfig => {
	const params = getSearchParams(req);
	const url = getSearchUrl(pathParams);
	return { method, params, url };
};
