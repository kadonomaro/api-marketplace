import ArticlesService from "../services/ArticlesService";
import BaseController from "./BaseController";
import BaseService from "../services/BaseService";

class ArticlesController extends BaseController {
    constructor(service: BaseService) {
        super(service);
    }
}

export default new ArticlesController(ArticlesService);
