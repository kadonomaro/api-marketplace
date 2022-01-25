import ReviewsModel from "../models/ReviewsModel";
import BaseService from "./BaseService";

class ReviewsService extends BaseService {
    constructor(model: any, entityName: string) {
        super(model, entityName);
    }
}

export default new ReviewsService(ReviewsModel, "reviews");
