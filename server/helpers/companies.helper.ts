import { AxiosRequestConfig, Method } from "axios";

import { CompanyParams } from "../interfaces";
import { Request } from "express";
import { apiKey } from "../env";
import { getCompanyPathParams } from "./url-builder.helper";

const getCompanyId = (req: Request): string => {
	return req.params.companyId ?? "";
};

const getCompanyUrl = (id: string, pathParams: string): string => {
	return `${getCompanyPathParams(id)}${pathParams}`;
};

const getCompanyParams = (): CompanyParams => {
	return {
		api_key: apiKey,
	};
};

export const getCompanyOptions = (
	req: Request,
	method: Method,
	pathParams: string = ""
): AxiosRequestConfig => {
	const id = getCompanyId(req);
	const params = getCompanyParams();
	const url = getCompanyUrl(id, pathParams);
	console.log("id, params, url: ", id, params, url);
	return { method, params, url };
};
