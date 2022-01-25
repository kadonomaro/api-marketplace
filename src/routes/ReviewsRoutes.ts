import { Router, Request, Response } from "express";
import ReviewsController from "../controllers/ReviewsController";

const router = Router();

router.post("/reviews", (req: Request, res: Response) =>
    ReviewsController.create(req, res)
);
router.get("/reviews", (req: Request, res: Response) =>
    ReviewsController.getAll(req, res)
);
router.put("/reviews", (req: Request, res: Response) =>
    ReviewsController.update(req, res)
);
router.delete("/reviews/:id", (req: Request, res: Response) =>
    ReviewsController.delete(req, res)
);

export const reviewsRouter = router;
