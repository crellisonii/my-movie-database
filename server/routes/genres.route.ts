import { getGenresMovie, getGenresTV } from "../controllers";

import { Router } from "express";

export const router = Router();

router.get("/movie/list", getGenresMovie);

router.get("/tv/list", getGenresTV);
