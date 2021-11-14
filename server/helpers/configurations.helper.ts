import { AxiosRequestConfig, Method } from "axios";

import { UrlOptions } from "../interfaces/url-options.interface";

const configurationPath = "/configuration";

const getConfigurationsUrl = (pathParams: string): string => {
	return `${configurationPath}${pathParams}`;
};

export const getConfigurationsOptions = (
	pathString: string = ""
): UrlOptions => {
	const pathParams = getConfigurationsUrl(pathString);
	const params = {};
	return { axiosConfig: { params }, pathParams };
};
