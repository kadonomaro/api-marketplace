import ArticlesService from "../services/ArticlesService.js";
import BaseController from "./BaseController.js";

class ArticlesController extends BaseController {
    constructor(service) {
        super(service);
    }
}

export default new ArticlesController(ArticlesService);
