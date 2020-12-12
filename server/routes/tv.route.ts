import { getTVCredits, getTVDetails } from "../controllers";

import { Router } from "express";

export const router = Router();

const tvId = '/:tvId';

router.get(tvId, getTVDetails);

router.get(`${tvId}/credits`, getTVCredits);