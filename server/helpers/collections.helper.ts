import { CollectionInput, CollectionParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";

const collectionPath = "/collection";

const getCollectionsId = (req: Request): string => {
	return req.params.collectionId ? req.params.collectionId : "";
};

const getCollectionsUrl = (id: string, pathParams: string): string => {
	const collectionString = `${collectionPath}/${id}`;
	return `${collectionString}${pathParams}`;
};

const getCollectionsParams = (req: Request): CollectionParams => {
	const { language }: CollectionInput = req.query;
	return {
		language: language ? language : "en-US",
	};
};

export const getCollectionsOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const id = getCollectionsId(req);
	const params = getCollectionsParams(req);
	const pathParams = getCollectionsUrl(id, pathString);
	return { axiosConfig: { params }, pathParams };
};
