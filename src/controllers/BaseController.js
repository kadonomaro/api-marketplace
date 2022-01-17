export default class BaseController {
    constructor(service) {
        this.service = service;
    }

    /**
     * Create entity in service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<void>}
     */
    async create(req, res) {
        try {
            const entity = await this.service.create(req.body, req.files.image);
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
    async getAll(req, res) {
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
    async getOne(req, res) {
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
    async update(req, res) {
        try {
            const updatedEntity = await this.service.update(req.body);
            return res.json(updatedEntity);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    /**
     * Delete entity in service
     * @param { Request } req
     * @param { Response } res
     * @return {Promise<*>}
     */
    async delete(req, res) {
        try {
            const entity = await this.service.delete(req.params.id);
            return res.json(entity);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
