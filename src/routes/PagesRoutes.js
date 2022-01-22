import { Router } from "express";
import PagesController from "../controllers/PagesController.js";

const router = new Router();

router.post("/pages", (...args) => PagesController.create(...args));
router.get("/pages/:slug", (...args) => PagesController.getBySlug(...args));
router.put("/pages", (...args) => PagesController.update(...args));
router.delete("/pages/:id", (...args) => PagesController.delete(...args));

export const pagesRouter = router;
