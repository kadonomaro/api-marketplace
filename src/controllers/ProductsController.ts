import ProductsService from "../services/ProductsService";
import BaseController from "./BaseController";

class ProductsController extends BaseController {
    constructor(service: any) {
        super(service);
    }
}

export default new ProductsController(ProductsService);
