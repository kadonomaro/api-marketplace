import { Router } from "express";
import ProductsController from "../controllers/ProductsController.js";

const router = new Router();

router.post("/products", (...args) => ProductsController.create(...args));
router.get("/products", (...args) => ProductsController.getAll(...args));
router.get("/products/:id", (...args) => ProductsController.getOne(...args));
router.put("/products", (...args) => ProductsController.update(...args));
router.delete("/products/:id", (...args) => ProductsController.delete(...args));

export const productsRouter = router;
