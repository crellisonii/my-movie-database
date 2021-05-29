import { Request, Response } from "express";

import { getConfigurationsOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getConfiguration = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("GET");
	getTmdbData(res, options);
};

export const getConfigurationCountries = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("GET", "/countries");
	getTmdbData(res, options);
};

export const getConfigurationJobs = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("GET", "/jobs");
	getTmdbData(res, options);
};

export const getConfigurationLanguages = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("GET", "/languages");
	getTmdbData(res, options);
};

export const getConfigurationPrimaryTranslations = (
	req: Request,
	res: Response
) => {
	const options = getConfigurationsOptions("GET", "/primary_translations");
	getTmdbData(res, options);
};

export const getConfigurationTimezones = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("GET", "/timezones");
	getTmdbData(res, options);
};
