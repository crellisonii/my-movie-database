import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";

const companyPath = "/company";

const getCompanyId = (req: Request): string => {
	return req.params.companyId ?? "";
};

const getCompanyUrl = (id: string, pathParams: string): string => {
	const companyString = `${companyPath}/${id}`;
	return `${companyString}${pathParams}`;
};

export const getCompanyOptions = (
	req: Request,
	pathString: string = ""
): UrlOptions => {
	const id = getCompanyId(req);
	const pathParams = getCompanyUrl(id, pathString);
	const params = {};
	return { axiosConfig: { params }, pathParams };
};
