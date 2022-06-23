import PagesService from "../services/PagesService";
import BaseController from "./BaseController";
import BaseService from "../services/BaseService";

class PagesController extends BaseController {
    constructor(service: BaseService) {
        super(service);
    }
}

export default new PagesController(PagesService);
