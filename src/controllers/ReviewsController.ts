import ReviewsService from "../services/ReviewsService";
import BaseController from "./BaseController";
import BaseService from "../services/BaseService";

class ReviewsController extends BaseController {
    constructor(service: BaseService) {
        super(service);
    }
}

export default new ReviewsController(ReviewsService);
