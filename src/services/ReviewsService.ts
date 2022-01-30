import { HydratedDocument } from "mongoose";
import ReviewsModel from "../models/ReviewsModel";
import BaseService from "./BaseService";

class ReviewsService extends BaseService {
    constructor(model: HydratedDocument<any>, entityName: string) {
        super(model, entityName);
    }
}

export default new ReviewsService(ReviewsModel, "reviews");
