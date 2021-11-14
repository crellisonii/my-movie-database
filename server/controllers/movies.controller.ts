import { Request, Response } from "express";

import { getMovieOptions } from "../helpers";
import { getTmdbData } from "../services";

export const getMovieDetails = (req: Request, res: Response) => {
	const options = getMovieOptions(req);
	getTmdbData(res, options);
};

export const getMovieCredits = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/credits");
	getTmdbData(res, options);
};

export const getMovieExternalIds = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/external_ids");
	getTmdbData(res, options);
};

export const getMovieImages = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/images");
	getTmdbData(res, options);
};

export const getMovieRecommendations = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/recommendations");
	getTmdbData(res, options);
};

export const getMovieReviews = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/reviews");
	getTmdbData(res, options);
};

export const getMovieSimilar = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/similar");
	getTmdbData(res, options);
};

export const getMovieVideos = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/videos");
	getTmdbData(res, options);
};

export const getMovieLatest = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/latest");
	getTmdbData(res, options);
};

export const getMovieNowPlaying = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/now_playing");
	getTmdbData(res, options);
};

export const getMoviePopular = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/popular");
	getTmdbData(res, options);
};

export const getMovieTopRated = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/top_rated");
	getTmdbData(res, options);
};

export const getMovieUpcoming = (req: Request, res: Response) => {
	const options = getMovieOptions(req, "/upcoming");
	getTmdbData(res, options);
};
