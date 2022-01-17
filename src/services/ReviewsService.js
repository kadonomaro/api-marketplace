import ReviewsModel from "../models/ReviewsModel.js";
import BaseService from "./BaseService.js";

class ReviewsService extends BaseService {
    constructor({ model, entityName }) {
        super({ model, entityName });
    }
}

export default new ReviewsService({
    model: ReviewsModel,
    entityName: "reviews",
});
