import axios, { AxiosRequestConfig } from "axios";
import { baseURL, imageUrl } from "../constants";

import { Response } from "express";

export const getTmdbData = async (
	res: Response,
	options: AxiosRequestConfig
) => {
	try {
		const getAxios = axios.create({
			baseURL,
		});
		const resp = await getAxios(options);
		res.json(resp.data);
	} catch (e) {
		const errorData = e.response.data;
		res.json(errorData);
	}
};
