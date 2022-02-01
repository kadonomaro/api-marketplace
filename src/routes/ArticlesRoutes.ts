import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validate } from "../validators";
import ArticlesController from "../controllers/ArticlesController";

const router = Router();

router.post(
    "/articles",
    validate(["title", "image"]),
    (req: Request, res: Response) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(200)
                .json({ success: false, errors: errors.array() });
        }
        ArticlesController.create(req, res);
    }
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
