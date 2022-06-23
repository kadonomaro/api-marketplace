import BaseService from "./BaseService";

class ReviewsService extends BaseService {
    constructor(entityName: string) {
        super(entityName);
    }
}

export default new ReviewsService("reviews");
