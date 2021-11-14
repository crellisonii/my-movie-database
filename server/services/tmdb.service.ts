import { Response } from "express";
import { UrlOptions } from "../interfaces/url-options.interface";
import { apiKey } from "../env";
import axios from "axios";
import { baseURL } from "../constants";

export const getTmdbData = async (res: Response, options: UrlOptions) => {
	const peopleUrl = `${baseURL}${options.pathParams}`;
	const config = options.axiosConfig;
	config.params.api_key = apiKey;
	axios
		.get(peopleUrl, config)
		.then((resp) => {
			res.json(resp.data);
		})
		.catch((error) => {
			if (error.response) {
				res.json(error);
			}
		});
};
