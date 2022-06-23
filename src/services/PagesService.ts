import BaseService from "./BaseService";

class PagesService extends BaseService {
    constructor(entityName: string) {
        super(entityName);
    }
}

export default new PagesService("pages");
