import { AxiosRequestConfig, Method } from "axios";

import { CreditsParams } from "../interfaces";
import { Request } from "express";
import { apiKey } from "../env";
import { getCreditsPathParams } from "./url-builder.helper";

const getCreditsId = (req: Request): string => {
	return req.params.creditId ? req.params.creditId : "";
};

const getCreditsUrl = (id: string): string => {
	return getCreditsPathParams(id);
};

const getCreditsParams = (): CreditsParams => {
	return {
		api_key: apiKey,
	};
};

export const getCreditsOptions = (
	req: Request,
	method: Method
): AxiosRequestConfig => {
	const id = getCreditsId(req);
	const params = getCreditsParams();
	const url = getCreditsUrl(id);
	return { method, params, url };
};
