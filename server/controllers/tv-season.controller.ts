import { Request, Response } from "express";

import { getTmdbData } from "../services";
import { getTvSeasonOptions } from "../helpers/tv-season.helper";

export const getTvSeasonDetails = (req: Request, res: Response) => {
  const options = getTvSeasonOptions(req, 'GET');
  getTmdbData(res, options);
}

export const getTvSeasonAggregateCredits = (req: Request, res: Response) => {
  const options = getTvSeasonOptions(req, 'GET', '/aggregate_credits');
  getTmdbData(res, options);
}

export const getTvSeasonCredits = (req: Request, res: Response) => {
  const options = getTvSeasonOptions(req, 'GET', '/credits');
  getTmdbData(res, options);
}

export const getTvSeasonExternalIds =  (req: Request, res: Response) => {
  const options = getTvSeasonOptions(req, 'GET', '/external_ids');
  getTmdbData(res, options);
}

export const getTvSeasonImages =  (req: Request, res: Response) => {
  const options = getTvSeasonOptions(req, 'GET', '/images');
  getTmdbData(res, options);
}

export const getTvSeasonVideos =  (req: Request, res: Response) => {
  const options = getTvSeasonOptions(req, 'GET', '/videos');
  getTmdbData(res, options);
}