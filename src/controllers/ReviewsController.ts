import ReviewsService from "../services/ReviewsService";
import BaseController from "./BaseController";

class ReviewsController extends BaseController {
    constructor(service: any) {
        super(service);
    }
}

export default new ReviewsController(ReviewsService);
