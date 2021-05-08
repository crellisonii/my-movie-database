import {
	getConfiguration,
	getConfigurationCountries,
	getConfigurationJobs,
	getConfigurationLanguages,
	getConfigurationTimezones,
} from "../controllers";

import { Router } from "express";

export const router = Router();

router.get("", getConfiguration);

router.get("/countries", getConfigurationCountries);

router.get("/jobs", getConfigurationJobs);

router.get("/languages", getConfigurationLanguages);

router.get("/timezones", getConfigurationTimezones);
