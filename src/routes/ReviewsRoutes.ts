import { Router, Request, Response } from "express";
import ReviewsController from "../controllers/ReviewsController";
import { validate } from "../validate";

const router = Router();

router.post("/", validate(["name", "author", "description", "source"]), (req: Request, res: Response) => ReviewsController.create(req, res));
router.get("/", (req: Request, res: Response) => ReviewsController.getAll(req, res));
router.get("/:id", (req: Request, res: Response) => ReviewsController.getOne(req, res));
router.put("/", validate(["name", "author", "description", "source"]), (req: Request, res: Response) => ReviewsController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ReviewsController.delete(req, res));

export const reviewsRouter = router;
