import ArticlesService from "../services/ArticlesService";
import BaseController from "./BaseController";

class ArticlesController extends BaseController {
    constructor(service: any) {
        super(service);
    }
}

export default new ArticlesController(ArticlesService);
