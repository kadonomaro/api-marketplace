import BaseService from "./BaseService";

class ArticlesService extends BaseService {
    constructor(entityName: string) {
        super(entityName);
    }
}

export default new ArticlesService("articles");
