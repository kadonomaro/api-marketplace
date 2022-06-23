import { Router, Request, Response } from "express";
import ProductsController from "../controllers/ProductsController";

const router = Router();

router.post("/", (req: Request, res: Response) => ProductsController.create(req, res));
router.get("/", (req: Request, res: Response) => ProductsController.getAll(req, res));
router.get("/:id", (req: Request, res: Response) => ProductsController.getOne(req, res));
router.put("/", (req: Request, res: Response) => ProductsController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ProductsController.delete(req, res));

export const productsRouter = router;
