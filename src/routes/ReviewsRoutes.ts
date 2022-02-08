import { Router, Request, Response } from "express";
import { validate } from "../validators";
import ReviewsController from "../controllers/ReviewsController";

const router = Router();

router.post("/", validate(["author", "description", "source"]), (req: Request, res: Response) => ReviewsController.create(req, res));
router.get("/", (req: Request, res: Response) => ReviewsController.getAll(req, res));
router.put("/", validate(["_id", "author", "description", "source"]), (req: Request, res: Response) => ReviewsController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ReviewsController.delete(req, res));

export const reviewsRouter = router;
