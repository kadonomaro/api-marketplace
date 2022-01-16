import ProductsService from "./ProductsService.js";

class ProductsController {
    async create(req, res) {
        try {
            const product = await ProductsService.create(req.body);
            res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const products = await ProductsService.getAll();
            return res.json(products);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async getOne(req, res) {
        try {
            const product = await ProductsService.getOne(req.params.id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    }
    async update(req, res) {
        try {
            const updatedProduct = await ProductsService.update(req.body);
            return res.json(updatedProduct);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async delete(req, res) {
        try {
            const product = await ProductsService.create(req.params.id);
            return res.json(product);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new ProductsController();
