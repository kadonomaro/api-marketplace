import ReviewsModel from "../models/ReviewsModel.js";
import BaseService from "./BaseService.js";

class ReviewsService extends BaseService {
    constructor({ model, entityName }) {
        super({ model, entityName });
    }

    async create(review, image) {
        await super.create(review, image);
    }

    async getAll() {
        return await super.getAll();
    }

    async update(review) {
        return await super.update(review);
    }

    async delete(id) {
        return await super.delete(id);
    }
}

export default new ReviewsService({
    model: ReviewsModel,
    entityName: "reviews",
});
