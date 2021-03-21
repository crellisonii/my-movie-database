import { Request, Response } from "express";

import { getConfigurationsOptions } from '../helpers';
import { getTmdbConfiguration } from '../services'

export const getConfiguration = (req: Request, res: Response) => {
  const options = getConfigurationsOptions('GET');
  getTmdbConfiguration(res, options);
}

export const getConfigurationCountries = (req: Request, res: Response) => {
  const options = getConfigurationsOptions('GET', 'countries');
  getTmdbConfiguration(res, options);
}

export const getConfigurationJobs = (req: Request, res: Response) => {
  const options = getConfigurationsOptions('GET', 'jobs');
  getTmdbConfiguration(res, options);
}

export const getConfigurationLanguages = (req: Request, res: Response) => {
  const options = getConfigurationsOptions('GET', 'languages');
  getTmdbConfiguration(res, options);
}

export const getConfigurationTimezones = (req: Request, res: Response) => {
  const options = getConfigurationsOptions('GET', 'timezones');
  getTmdbConfiguration(res, options);
}