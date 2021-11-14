import { Request } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";

const reviewPath = "/review";

const getReviewsId = (req: Request): string => {
	return req.params.reviewsId ? req.params.reviewsId : "";
};

const getReviewsUrl = (id: string): string => {
	return `${reviewPath}/${id}`;
};

export const getReviewsOptions = (req: Request): UrlOptions => {
	const id = getReviewsId(req);
	const params = {};
	const pathParams = getReviewsUrl(id);
	return { axiosConfig: { params }, pathParams };
};
