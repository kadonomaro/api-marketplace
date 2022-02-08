import { Router, Request, Response } from "express";
import { validate } from "../validators";
import ArticlesController from "../controllers/ArticlesController";

const router = Router();

router.post("/", validate("title"), (req: Request, res: Response) => ArticlesController.create(req, res));
router.get("/", (req: Request, res: Response) => ArticlesController.getAll(req, res));
router.put("/", validate(["_id", "title"]), (req: Request, res: Response) => ArticlesController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ArticlesController.delete(req, res));

export const articlesRouter = router;
