import { TVInput, TVParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { assign } from "lodash";

const tvPath = "/tv";

const getTvId = (req: Request): string => {
	return req.params.tvId ? req.params.tvId : "";
};

const getTvUrl = (id: string, pathParams: string): string => {
	const tvString = `${tvPath}${id}`;
	return `${tvString}${pathParams}`;
};

const getTvParams = (req: Request): TVParams => {
	const { append_to_response, language, page }: TVInput = req.query;
	let params = {
		language: language ? language : "en-US",
	};
	params = append_to_response ? assign(params, { append_to_response }) : params;
	params = page ? assign(params, { page }) : params;
	return params;
};

export const getTvOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const tvId = getTvId(req);
	const params = getTvParams(req);
	const pathParams = getTvUrl(tvId, pathString);
	return { axiosConfig: { params }, pathParams };
};
