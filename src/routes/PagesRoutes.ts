import { Router, Request, Response } from "express";
import PagesController from "../controllers/PagesController";

const router = Router();

router.post("/", (req: Request, res: Response) => PagesController.create(req, res));
router.get("/", (req: Request, res: Response) => PagesController.getAll(req, res));
router.get("/:id", (req: Request, res: Response) => PagesController.getOne(req, res));
router.put("/", (req: Request, res: Response) => PagesController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => PagesController.delete(req, res));

export const pagesRouter = router;
