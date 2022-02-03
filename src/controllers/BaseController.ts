import { Request, Response } from "express";
import BaseService from "../services/BaseService";

export default class BaseController {
    private service;
    constructor(service: BaseService) {
        this.service = service;
    }

    /**
     * Create entity in service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<void>}
     */
    async create(req: Request, res: Response) {
        try {
            const entity = await this.service.create(req.body, req.files!.image);
            res.json(entity);
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
            const entities = await this.service.getAll();
            return res.json(entities);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    /**
     * Get entity from service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<*>}
     */
    async getOne(req: Request, res: Response) {
        try {
            const entity = await this.service.getOne(req.params.id);
            return res.json(entity);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    /**
     * Update entity in service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<*>}
     */
    async update(req: Request, res: Response) {
        try {
            const updatedEntity = await this.service.update(req.body);
            return res.json(updatedEntity);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    /**
     * Delete entity in service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<*>}
     */
    async delete(req: Request, res: Response) {
        try {
            const entity = await this.service.delete(req.params.id);
            return res.json(entity);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
