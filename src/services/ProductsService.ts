import BaseService from "./BaseService";

class ProductsService extends BaseService {
    constructor(entityName: string) {
        super(entityName);
    }
}

export default new ProductsService("products");
