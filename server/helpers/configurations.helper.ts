import { AxiosRequestConfig, Method } from "axios";

import { ConfigurationParams } from "../interfaces";
import { apiKey } from "../env";
import { getConfigurationPathParams } from ".";

const getConfigurationsUrl = (pathParams: string): string => {
	return `${getConfigurationPathParams()}/${pathParams}`;
};

const getConfigurationsParams = (): ConfigurationParams => {
	return {
		api_key: apiKey,
	};
};

export const getConfigurationsOptions = (
	method: Method,
	pathParam: string = ""
): AxiosRequestConfig => {
	const url = getConfigurationsUrl(pathParam);
	const params = getConfigurationsParams();
	return { method, params, url };
};
