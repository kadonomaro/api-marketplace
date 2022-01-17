import express from "express";
import { Router } from "express";
import ReviewsController from "../controllers/ReviewsController.js";

const router = new Router();

router.post("/reviews", (...args) => ReviewsController.create(...args));
router.get("/reviews", (...args) => ReviewsController.getAll(...args));
router.put("/reviews", (...args) => ReviewsController.update(...args));
router.delete("/reviews/:id", (...args) => ReviewsController.delete(...args));

export const reviewsRouter = router;
