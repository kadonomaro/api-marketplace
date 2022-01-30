import { HydratedDocument } from "mongoose";
import ArticlesModel from "../models/ArticlesModel";
import BaseService from "./BaseService";

class ArticlesService extends BaseService {
    constructor(model: HydratedDocument<any>, entityName: string) {
        super(model, entityName);
    }
}

export default new ArticlesService(ArticlesModel, "articles");
