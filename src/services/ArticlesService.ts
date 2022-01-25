import ArticlesModel from "../models/ArticlesModel";
import BaseService from "./BaseService";

class ArticlesService extends BaseService {
    constructor({ model, entityName }: { model: any; entityName: string }) {
        super({ model, entityName });
    }
}

export default new ArticlesService({
    model: ArticlesModel,
    entityName: "articles",
});
