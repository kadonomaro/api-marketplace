import { HydratedDocument } from "mongoose";
import { UploadedFile } from "express-fileupload";
import FileService from "./FileService";

export default class BaseService {
    private model;
    private entityName;

    constructor(model: HydratedDocument<any>, entityName: string) {
        this.model = model;
        this.entityName = entityName;
    }

    /**
     * Create new entity
     * @param { Object } entity
     * @param { Object } image
     * @return {Promise<*>}
     */
    async create(entity: object, image: UploadedFile | UploadedFile[]) {
        const imageName = FileService.save(image, this.entityName);
        return await this.model.create({ ...entity, image: imageName });
    }

    /**
     * Get all entities from database
     * @return {Promise<*>}
     */
    async getAll() {
        return await this.model.find();
    }

    /**
     * Get entity from database by id
     * @param { String, Number } id
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async getOne(id: string | number) {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findById(id);
    }

    /**
     * Update entity in database
     * @param { Object } entity
     * @return {Promise<*>}
     */
    async update(entity: any) {
        if (!entity._id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        return await this.model.findByIdAndUpdate(entity._id, entity, {
            new: true,
        });
    }

    /**
     * Delete entity from database by id
     * @param { String, Number } id
     * @return {Promise<awaited Query<any, any, {}, any> | Query<any, any, {}, DocType>>}
     */
    async delete(id: string | number) {
        if (!id) {
            throw new Error(`Не указан идентификатор для [${this.entityName}]`);
        }
        const model = await this.model.findByIdAndDelete(id);
        FileService.remove(model.image, this.entityName);
        return model;
    }
}
