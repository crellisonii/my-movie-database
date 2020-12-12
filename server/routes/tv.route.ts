import { getTVCredits, getTVDetails, getTVExternalIds } from "../controllers";

import { Router } from "express";

export const router = Router();

const tvId = '/:tvId';

router.get(tvId, getTVDetails);

router.get(`${tvId}/credits`, getTVCredits);

router.get(`${tvId}/external_ids`, getTVExternalIds);