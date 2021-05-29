import {
	getConfiguration,
	getConfigurationCountries,
	getConfigurationJobs,
	getConfigurationLanguages,
	getConfigurationPrimaryTranslations,
	getConfigurationTimezones,
} from "../controllers";

import { Router } from "express";

export const router = Router();

router.get("", getConfiguration);

router.get("/countries", getConfigurationCountries);

router.get("/jobs", getConfigurationJobs);

router.get("/languages", getConfigurationLanguages);

router.get("/primary_translations", getConfigurationPrimaryTranslations);

router.get("/timezones", getConfigurationTimezones);
