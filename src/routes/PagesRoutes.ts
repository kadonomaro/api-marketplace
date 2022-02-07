import { Router, Request, Response } from "express";
import PagesController from "../controllers/PagesController";

const router = Router();

router.post("/", (req: Request, res: Response) => PagesController.create(req, res));
router.get("/:slug", (req: Request, res: Response) => PagesController.getBySlug(req, res));
router.put("/", (req: Request, res: Response) => PagesController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => PagesController.delete(req, res));

export const pagesRouter = router;
