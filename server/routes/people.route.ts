import {
  getPersonCombinedCredits,
  getPersonExternalIds,
  getPersonImages,
  getPersonTaggedImages,
  getPersonTvCredits
} from '../controllers/people.controller';
import { getPersonDetails, getPersonMovieCredits } from '../controllers';

import { Router } from "express";

export const router = Router();

const personId = '/:personId';

router.get(personId, getPersonDetails);

router.get(`${personId}/movie_credits`, getPersonMovieCredits);

router.get(`${personId}/tv_credits`, getPersonTvCredits);

router.get(`${personId}/combined_credits`, getPersonCombinedCredits);

router.get(`${personId}/external_ids`, getPersonExternalIds);

router.get(`${personId}/images`, getPersonImages);

router.get(`${personId}/tagged_images`, getPersonTaggedImages);
