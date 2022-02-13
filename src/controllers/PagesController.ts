import { Request, Response } from "express";
import PagesService from "../services/PagesService";
import pagesService from "../services/PagesService";

class PagesController {
    async create(req: Request, res: Response) {
        try {
            const page = await PagesService.create(req.body);
            res.json(page);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    /**
     * Get all entities from service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<*>}
     */
    async getAll(req: Request, res: Response) {
        try {
            const pages = await pagesService.getAll();
            return res.json(pages);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getBySlug(req: Request, res: Response) {
        try {
            const page = await PagesService.getBySlug(req.params.slug);
            return res.json(page);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req: Request, res: Response) {
        try {
            const updatedPage = await PagesService.update(req.body);
            return res.json(updatedPage);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const page = await PagesService.delete(req.body);
            return res.json(page);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PagesController();
