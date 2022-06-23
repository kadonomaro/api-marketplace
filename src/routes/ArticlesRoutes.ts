import { Router, Request, Response } from "express";
import ArticlesController from "../controllers/ArticlesController";

const router = Router();

router.post("/", (req: Request, res: Response) => ArticlesController.create(req, res));
router.get("/", (req: Request, res: Response) => ArticlesController.getAll(req, res));
router.get("/:id", (req: Request, res: Response) => ArticlesController.getOne(req, res));
router.put("/", (req: Request, res: Response) => ArticlesController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ArticlesController.delete(req, res));

export const articlesRouter = router;
