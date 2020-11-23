import { Router } from 'express';
import { getCredits } from '../controllers';

export const router = Router();

router.get('/:creditId', getCredits);