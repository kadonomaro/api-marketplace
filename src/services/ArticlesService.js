import ArticlesModel from "../models/ArticlesModel.js";
import BaseService from "./BaseService.js";

class ArticlesService extends BaseService {
    constructor({ model, entityName }) {
        super({ model, entityName });
    }
}

export default new ArticlesService({
    model: ArticlesModel,
    entityName: "articles",
});
