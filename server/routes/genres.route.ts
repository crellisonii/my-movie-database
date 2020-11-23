import { getMovieGenres, getTVGenres } from '../controllers/genres.controller';

import { Router } from 'express';

export const router = Router();

router.get('/movie/list', getMovieGenres);

router.get('/tv/list', getTVGenres);