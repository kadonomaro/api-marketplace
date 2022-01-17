import ProductsModel from "../models/ProductsModel.js";
import BaseService from "./BaseService.js";

class ProductsService extends BaseService {
    constructor({ model, entityName }) {
        super({ model, entityName });
    }
}

export default new ProductsService({
    model: ProductsModel,
    entityName: "products",
});
