import ProductsModel from "../models/ProductsModel";
import BaseService from "./BaseService";

class ProductsService extends BaseService {
    constructor({ model, entityName }) {
        super({ model, entityName });
    }
}

export default new ProductsService({
    model: ProductsModel,
    entityName: "products",
});
