import { Router, Request, Response } from "express";
import AuthController from "../controllers/AuthController";
import { validate } from "../validate";

const router = Router();

router.post("/create", validate(["email", "password"]), (req: Request, res: Response) => AuthController.create(req, res));
router.post("/login", validate(["email", "password"]), (req: Request, res: Response) => AuthController.login(req, res));
router.get("/logout", (req) => AuthController.logout());

export const authRouter = router;
