import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validate } from "../validators";
import ReviewsController from "../controllers/ReviewsController";

const router = Router();

router.post("/", validate(["author", "description", "source"]), (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ success: false, errors: errors.array() });
    }
    ReviewsController.create(req, res);
});
router.get("/", (req: Request, res: Response) => ReviewsController.getAll(req, res));
router.put("/", (req: Request, res: Response) => ReviewsController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ReviewsController.delete(req, res));

export const reviewsRouter = router;
