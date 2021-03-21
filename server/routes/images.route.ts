import { Router } from 'express';
import { getImages } from '../controllers';

export const router = Router();

router.get('', getImages);