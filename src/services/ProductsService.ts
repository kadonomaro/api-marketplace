import ProductsModel from "../models/ProductsModel";
import BaseService from "./BaseService";

class ProductsService extends BaseService {
    constructor(model: any, entityName: string) {
        super(model, entityName);
    }
}

export default new ProductsService(ProductsModel, "products");
