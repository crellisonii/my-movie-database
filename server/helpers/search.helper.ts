import { SearchInput, SearchParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { assign } from "lodash";

const searchPath = "/search";

const getSearchUrl = (pathParams: string): string => {
	return `${searchPath}${pathParams}`;
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
	pathString: string
): UrlOptions => {
	const params = getSearchParams(req);
	const pathParams = getSearchUrl(pathString);
	return { axiosConfig: { params }, pathParams };
};
