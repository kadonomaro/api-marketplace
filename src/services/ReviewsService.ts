import ReviewsModel from "../models/ReviewsModel";
import BaseService from "./BaseService";

class ReviewsService extends BaseService {
    constructor({ model, entityName }: { model: any; entityName: string }) {
        super({ model, entityName });
    }
}

export default new ReviewsService({
    model: ReviewsModel,
    entityName: "reviews",
});
