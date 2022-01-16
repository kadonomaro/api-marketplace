import ProductsModel from "../models/ProductsModel.js";
import BaseService from "./BaseService.js";

class ProductsService extends BaseService {
    constructor({ model, entityName }) {
        super({ model, entityName });
    }

    async create(product, image) {
        return await super.create(product, image);
    }

    async getAll() {
        return await super.getAll();
    }

    async getOne(id) {
        return await super.getOne(id);
    }

    async update(product) {
        return await super.update(product);
    }

    async delete(id) {
        return await super.delete(id);
    }
}

export default new ProductsService({
    model: ProductsModel,
    entityName: "products",
});
