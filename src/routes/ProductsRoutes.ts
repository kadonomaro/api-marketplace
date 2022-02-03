import { Router, Request, Response } from "express";
import { validationResult } from "express-validator";
import { validate } from "../validators";
import ProductsController from "../controllers/ProductsController";

const router = Router();

router.post("/", validate(["name", "price", "image"]), (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(200).json({ success: false, errors: errors.array() });
    }
    ProductsController.create(req, res);
});
router.get("/", (req: Request, res: Response) => ProductsController.getAll(req, res));
router.get("/:id", (req: Request, res: Response) => ProductsController.getOne(req, res));
router.put("/", (req: Request, res: Response) => ProductsController.update(req, res));
router.delete("/:id", (req: Request, res: Response) => ProductsController.delete(req, res));

export const productsRouter = router;
