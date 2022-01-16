import FileService from "./FileService.js";

export default class BaseService {
    constructor({ model, entityName }) {
        this.model = model;
        this.entityName = entityName;
    }

    /**
     * Create new entity
     * @param { Object } entity
     * @param { Object } image
     * @return {Promise<*>}
     */
    async create(entity, image) {
        const imageName = FileService.save(image, this.entityName);
        return await this.model.create({ ...entity, image: imageName });
    }

    /**
     * Get all entities
     * @return {Promise<*>}
     */
    async getAll() {
        return await this.model.find();
    }

    /**
     * Get entity by id
     * @param { String, Number } id
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async getOne(id) {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findById(id);
    }

    /**
     * Update entity
     * @param { Object } entity
     * @return {Promise<*>}
     */
    async update(entity) {
        if (!entity._id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findByIdAndUpdate(entity._id, entity, {
            new: true,
        });
    }

    /**
     * Delete entity by id
     * @param { String, Number } id
     * @return {Promise<awaited Query<any, any, {}, any> | Query<any, any, {}, DocType>>}
     */
    async delete(id) {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findByIdAndDelete(id);
    }
}
