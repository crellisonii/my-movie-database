import {
	getSearchCollections,
	getSearchMovies,
	getSearchMulti,
	getSearchPerson,
	getSearchTV,
} from "../controllers";

import { Router } from "express";

export const router = Router();

router.get("/collection", getSearchCollections);

router.get("/movie", getSearchMovies);

router.get("/multi", getSearchMulti);

router.get("/person", getSearchPerson);

router.get("/tv", getSearchTV);
