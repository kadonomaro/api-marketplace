import { HydratedDocument } from "mongoose";
import ProductsModel from "../models/ProductsModel";
import BaseService from "./BaseService";

class ProductsService extends BaseService {
    constructor(model: HydratedDocument<any>, entityName: string) {
        super(model, entityName);
    }
}

export default new ProductsService(ProductsModel, "products");
