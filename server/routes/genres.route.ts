import { getMovieGenres, getTVGenres } from '../controllers';

import { Router } from 'express';

export const router = Router();

router.get('/movie/list', getMovieGenres);

router.get('/tv/list', getTVGenres);