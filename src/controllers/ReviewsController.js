import ReviewsService from "../services/ReviewsService.js";
import BaseController from "./BaseController.js";

class ReviewsController extends BaseController {
    constructor(service) {
        super(service);
    }
}

export default new ReviewsController(ReviewsService);
