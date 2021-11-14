import { PeopleInput, PeopleParams } from "../interfaces";

import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { assign } from "lodash";

const peoplePath = "/person";

const getPeopleId = (req: Request): string => {
	return req.params.personId ? req.params.personId : "";
};

const getPeopleUrl = (id: string, pathParams: string): string => {
	const peopleString = `${peoplePath}/${id}`;
	return `${peopleString}${pathParams}`;
};

const getPeopleParams = (req: Request): PeopleParams => {
	const { append_to_response, language, page }: PeopleInput = req.query;
	let params = {
		language: language ? language : "en-US",
	};
	params = append_to_response ? assign(params, { append_to_response }) : params;
	params = page ? assign(params, { page }) : params;
	return params;
};

export const getPeopleOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const id = getPeopleId(req);
	const params = getPeopleParams(req);
	const pathParams = getPeopleUrl(id, pathString);
	return { pathParams, axiosConfig: { params } };
};
