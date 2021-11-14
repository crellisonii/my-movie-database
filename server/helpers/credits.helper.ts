import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";

const creditPath = "/credit";

const getCreditsId = (req: Request): string => {
	return req.params.creditId ? req.params.creditId : "";
};

const getCreditsUrl = (id: string): string => {
	return `${creditPath}/${id}`;
};

export const getCreditsOptions = (req: Request): UrlOptions => {
	const id = getCreditsId(req);
	const pathParams = getCreditsUrl(id);
	const params = {};
	return { axiosConfig: { params }, pathParams };
};
