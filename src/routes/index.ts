import { Router } from "express";
import { articlesRouter } from "./ArticlesRoutes";
import { pagesRouter } from "./PagesRoutes";
import { productsRouter } from "./ProductsRoutes";
import { reviewsRouter } from "./ReviewsRoutes";

const router = Router();

router.use("/articles", articlesRouter);
router.use("/pages", pagesRouter);
router.use("/products", productsRouter);
router.use("/reviews", reviewsRouter);

export { router };
