import { AxiosRequestConfig, Method } from "axios";

import { ImageInput } from "../interfaces";
import { Request } from "express";

const getImagesUrl = (req: Request): string => {
	const { imagePath, size }: ImageInput = req.query;
	return `/${size}/${imagePath}`;
};

export const getImagesOptions = (
	req: Request,
	method: Method
): AxiosRequestConfig => {
	const url = getImagesUrl(req);
	return { method, url };
};
