import { Request, Response } from "express";
import AuthService from "../services/AuthService";
import { User } from "../types";

class AuthController {
    private service;
    constructor(service: AuthService) {
        this.service = service;
    }

    async create(req: Request, res: Response) {
        try {
            const { email, password }: User = req.body;
            const user = await this.service.create({ email, password });
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password }: User = req.body;
            const user = await this.service.login({ email, password });
            res.json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async logout() {
        await this.service.logout();
    }
}

export default new AuthController(new AuthService());
