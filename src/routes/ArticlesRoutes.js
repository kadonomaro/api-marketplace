import express from "express";
import { Router } from "express";
import ArticlesController from "../controllers/ArticlesController.js";

const router = new Router();

router.post("/articles", (...args) => ArticlesController.create(...args));
router.get("/articles", (...args) => ArticlesController.getAll(...args));
router.put("/articles", (...args) => ArticlesController.update(...args));
router.delete("/articles/:id", (...args) => ArticlesController.delete(...args));

export const articlesRouter = router;
