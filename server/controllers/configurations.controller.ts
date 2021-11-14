import { Request, Response } from "express";

import { getConfigurationsOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getConfiguration = (req: Request, res: Response) => {
	const options = getConfigurationsOptions();
	getTmdbData(res, options);
};

export const getConfigurationCountries = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("/countries");
	getTmdbData(res, options);
};

export const getConfigurationJobs = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("/jobs");
	getTmdbData(res, options);
};

export const getConfigurationLanguages = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("/languages");
	getTmdbData(res, options);
};

export const getConfigurationPrimaryTranslations = (
	req: Request,
	res: Response
) => {
	const options = getConfigurationsOptions("/primary_translations");
	getTmdbData(res, options);
};

export const getConfigurationTimezones = (req: Request, res: Response) => {
	const options = getConfigurationsOptions("/timezones");
	getTmdbData(res, options);
};
