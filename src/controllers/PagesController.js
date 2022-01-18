import PagesService from "../services/PagesService.js";

class PagesController {
    async create(req, res) {
        try {
            const page = await PagesService.create(req.body);
            res.json(page);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getBySlug(req, res) {
        try {
            const page = await PagesService.getBySlug(req.params.slug);
            return res.json(page);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedPage = await PagesService.update(req.body);
            return res.json(updatedPage);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async delete(req, res) {
        try {
            const page = await PagesService.delete(req.body);
            return res.json(page);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new PagesController();
