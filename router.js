import { Router } from "express";
import ProductsController from "./src/products/ProductsController.js";
import ReviewsController from "./src/reviews/ReviewsController.js";

const router = new Router();

router.post("/products", ProductsController.create);
router.get("/products", ProductsController.getAll);
router.get("/products/:id", ProductsController.getOne);
router.put("/products", ProductsController.update);
router.delete("/products/:id", ProductsController.delete);

router.post("/reviews", ReviewsController.create);
router.get("/reviews", ReviewsController.getAll);
router.put("/reviews", ReviewsController.update);
router.delete("/reviews/:id", ReviewsController.delete);

export default router;
