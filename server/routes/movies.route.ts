import { Router } from 'express';
import { getMovieDetails } from '../controllers';

export const router = Router();

router.get('/:movieId', getMovieDetails);