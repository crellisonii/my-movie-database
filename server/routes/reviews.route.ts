import { Router } from "express";
import { getReviewsDetails } from "../controllers";

export const router = Router();

const reviewsId = "/:reviewsId";

router.get(reviewsId, getReviewsDetails);
