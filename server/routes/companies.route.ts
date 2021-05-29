import {
	getCompanyAlternativeNames,
	getCompanyDetails,
	getCompanyImages,
} from "../controllers";

import { Router } from "express";

export const router = Router();

const companyId = "/:companyId";

router.get(companyId, getCompanyDetails);

router.get(`${companyId}/alternative_names`, getCompanyAlternativeNames);

router.get(`${companyId}/images`, getCompanyImages);
