import FileService from "./FileService.js";

export default class BaseService {
    constructor({ model, entityName }) {
        this.model = model;
        this.entityName = entityName;
    }

    async create(entity, image) {
        const imageName = FileService.save(image, this.entityName);
        return await this.model.create({ ...entity, image: imageName });
    }

    async getAll() {
        return await this.model.find();
    }

    async getOne(id) {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findById(id);
    }

    async update(entity) {
        if (!entity._id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findByIdAndUpdate(entity._id, entity, {
            new: true,
        });
    }

    async delete(id) {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findByIdAndDelete(id);
    }
}
