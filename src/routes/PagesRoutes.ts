import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validate } from "../validators";
import PagesController from "../controllers/PagesController";

const router = Router();

router.post("/", validate(["slug", "seo"]), (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ success: false, errors: errors.array() });
    }
    PagesController.create(req, res);
});
router.get("/:slug", (req: Request, res: Response) => PagesController.getBySlug(req, res));
router.put("/", (req: Request, res: Response) => PagesController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => PagesController.delete(req, res));

export const pagesRouter = router;
