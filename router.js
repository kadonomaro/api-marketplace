import { Router } from "express";
import ProductsController from "./src/controllers/ProductsController.js";
import ReviewsController from "./src/controllers/ReviewsController.js";
import ArticlesController from "./src/controllers/ArticlesController.js";

const router = new Router();

router.post("/products", (...args) => ProductsController.create(...args));
router.get("/products", (...args) => ProductsController.getAll(...args));
router.get("/products/:id", (...args) => ProductsController.getOne(...args));
router.put("/products", (...args) => ProductsController.update(...args));
router.delete("/products/:id", (...args) => ProductsController.delete(...args));

router.post("/reviews", (...args) => ReviewsController.create(...args));
router.get("/reviews", (...args) => ReviewsController.getAll(...args));
router.put("/reviews", (...args) => ReviewsController.update(...args));
router.delete("/reviews/:id", (...args) => ReviewsController.delete(...args));

router.post("/articles", (...args) => ArticlesController.create(...args));
router.get("/articles", (...args) => ArticlesController.getAll(...args));
router.put("/articles", (...args) => ArticlesController.update(...args));
router.delete("/articles/:id", (...args) => ArticlesController.delete(...args));

export default router;
