import { Router } from "express";
import { getTVDetails } from "../controllers";

export const router = Router();

const tvId = '/:tvId';

router.get(tvId, getTVDetails);