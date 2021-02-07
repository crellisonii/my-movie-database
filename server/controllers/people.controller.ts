import { Request, Response } from "express";

import { getPeopleOptions } from "../helpers/people.helper";
import { getTmdbData } from "../services";

export const getPersonDetails = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET');
  getTmdbData(res, options);
}

export const getPersonMovieCredits = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET', '/movie_credits');
  getTmdbData(res, options);
}

export const getPersonTvCredits = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET', '/tv_credits');
  getTmdbData(res, options);
}

export const getPersonCombinedCredits = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET', '/combined_credits');
  getTmdbData(res, options);
}

export const getPersonExternalIds = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET', '/external_ids');
  getTmdbData(res, options);
}

export const getPersonImages = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET', '/images');
  getTmdbData(res, options);
}

export const getPersonTaggedImages = (req: Request, res: Response) => {
  const options = getPeopleOptions(req, 'GET', '/tagged_images');
  getTmdbData(res, options);
}