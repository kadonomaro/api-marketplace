import ProductsService from "../services/ProductsService";
import BaseController from "./BaseController";
import BaseService from "../services/BaseService";

class ProductsController extends BaseController {
    constructor(service: BaseService) {
        super(service);
    }
}

export default new ProductsController(ProductsService);
