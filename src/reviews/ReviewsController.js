import ReviewsService from "./ReviewsService.js";

class ReviewsController {
    async create(req, res) {
        try {
            const review = await ReviewsService.create(req.body);
            res.json(review);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async getAll(req, res) {
        try {
            const reviews = await ReviewsService.getAll();
            return res.json(reviews);
        } catch (e) {
            res.status(500).json(e);
        }
    }

    async update(req, res) {
        try {
            const updatedReview = await ReviewsService.update(req.body);
            return res.json(updatedReview);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }
    async delete(req, res) {
        try {
            const review = await ReviewsService.create(req.params.id);
            return res.json(review);
        } catch (e) {
            res.status(500).json(e);
        }
    }
}

export default new ReviewsController();
