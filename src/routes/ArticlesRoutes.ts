import { Router, Request, Response } from "express";
import ArticlesController from "../controllers/ArticlesController";

const router = Router();

router.post("/articles", (req: Request, res: Response) =>
    ArticlesController.create(req, res)
);
router.get("/articles", (req: Request, res: Response) =>
    ArticlesController.getAll(req, res)
);
router.put("/articles", (req: Request, res: Response) =>
    ArticlesController.update(req, res)
);
router.delete("/articles/:id", (req: Request, res: Response) =>
    ArticlesController.delete(req, res)
);

export const articlesRouter = router;
