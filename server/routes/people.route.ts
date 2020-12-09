import { Router } from "express";
import { getPersonDetails } from '../controllers/people.controller';

export const router = Router();

const personId = '/:personId';

router.get(personId, getPersonDetails);

router.get(`${personId}/movie_credits`, );

router.get(`${personId}/tv_credits`, );

router.get(`${personId}/combined_credits`, );

router.get(`${personId}/external_ids`, );

router.get(`${personId}/images`, );

router.get(`${personId}/tagged_images`, );
