export default class BaseController {
    constructor(service) {
        this.service = service;
    }

    async create(req, res) {
        try {
            const entity = await this.service.create(req.body, req.files.image);
            res.json(entity);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const entities = await this.service.getAll();
            return res.json(entities);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getOne(req, res) {
        try {
            const entity = await this.service.getOne(req.params.id);
            return res.json(entity);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedEntity = await this.service.update(req.body);
            return res.json(updatedEntity);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const entity = await this.service.delete(req.params.id);
            return res.json(entity);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}
