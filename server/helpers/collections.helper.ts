import { AxiosRequestConfig, Method } from "axios";
import { CollectionInput, CollectionParams } from "../interfaces";

import { Request } from "express";
import { apiKey } from "../env";
import { getCollectionPathParams } from "./url-builder.helper";

const getCollectionsId = (req: Request): string => {
	return req.params.collectionId ? req.params.collectionId : "";
};

const getCollectionsUrl = (id: string, pathParams: string): string => {
	return `${getCollectionPathParams(id)}${pathParams ? pathParams : ""}`;
};

const getCollectionsParams = (req: Request): CollectionParams => {
	const { language }: CollectionInput = req.query;
	return {
		api_key: apiKey,
		language: language ? language : "en-US",
	};
};

export const getCollectionsOptions = (
	req: Request,
	method: Method,
	pathParams: string = ""
): AxiosRequestConfig => {
	const id = getCollectionsId(req);
	const params = getCollectionsParams(req);
	const url = getCollectionsUrl(id, pathParams);
	return { method, params, url };
};
