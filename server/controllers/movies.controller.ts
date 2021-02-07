import { Request, Response } from 'express';

import { getMovieOptions } from '../helpers';
import { getTmdbData } from '../services';

export const getMovieDetails = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET');
  getTmdbData(res, options);
}

export const getMovieCredits = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/credits');
  getTmdbData(res, options);
}

export const getMovieExternalIds = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/external_ids');
  getTmdbData(res, options);
}

export const getMovieImages = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/images');
  getTmdbData(res, options);
}

export const getMovieRecommendations = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/recommendations');
  getTmdbData(res, options);
}

export const getMovieReviews = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/reviews');
  getTmdbData(res, options);
}

export const getMovieSimilar = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/similar');
  getTmdbData(res, options);
}

export const getMovieVideos = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/videos');
  getTmdbData(res, options);
}

export const getMovieLatest = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/latest');
  getTmdbData(res, options);
}

export const getMovieNowPlaying = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/now_playing');
  getTmdbData(res, options);
}

export const getMoviePopular = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/popular');
  getTmdbData(res, options);
}

export const getMovieTopRated = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/top_rated');
  getTmdbData(res, options);
}

export const getMovieUpcoming = (req: Request, res: Response) => {
  const options = getMovieOptions(req, 'GET', '/upcoming');
  getTmdbData(res, options);
}