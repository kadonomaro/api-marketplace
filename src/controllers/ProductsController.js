import ProductsService from "../services/ProductsService.js";
import BaseController from "./BaseController.js";

class ProductsController extends BaseController {
    constructor(service) {
        super(service);
    }
}

export default new ProductsController(ProductsService);
