import ReviewsModel from "./ReviewsModel.js";

class ReviewsService {
    async create(review) {
        return await ReviewsModel.create(review);
    }

    async getAll() {
        return await ReviewsModel.find();
    }

    async update(review) {
        if (!review._id) {
            throw new Error("Не указан идентификатор отзыва");
        }
        return await ReviewsModel.findByIdAndUpdate(review._id, review, {
            new: true,
        });
    }

    async delete(id) {
        if (!id) {
            throw new Error("Не указан идентификатор отзыва");
        }
        return await ReviewsModel.findByIdAndDelete(id);
    }
}

export default new ReviewsService();
