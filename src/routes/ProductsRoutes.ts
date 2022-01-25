import { Router, Request, Response } from "express";
import ProductsController from "../controllers/ProductsController";

const router = Router();

router.post("/products", (req: Request, res: Response) =>
    ProductsController.create(req, res)
);
router.get("/products", (req: Request, res: Response) =>
    ProductsController.getAll(req, res)
);
router.get("/products/:id", (req: Request, res: Response) =>
    ProductsController.getOne(req, res)
);
router.put("/products", (req: Request, res: Response) =>
    ProductsController.update(req, res)
);
router.delete("/products/:id", (req: Request, res: Response) =>
    ProductsController.delete(req, res)
);

export const productsRouter = router;
