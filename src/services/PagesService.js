import PagesModel from "../models/PagesModel.js";

class PagesService {
    /**
     * Create page entity
     * @param { Object } page
     * @return {Promise<HydratedDocument<any, {}, {}>[]>}
     */
    async create(page) {
        return await PagesModel.create(page);
    }

    /**
     * Get page entity by slug
     * @param { String } slug
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async getBySlug(slug) {
        if (!slug) {
            throw new Error(`Не указан "slug" для [page]`);
        }
        return await PagesModel.findOne({ slug });
    }

    /**
     * Update page entity
     * @param { Object } page
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async update(page) {
        if (!page._id) {
            throw new Error(`Не указан идентификатор для [page]`);
        }
        return await PagesModel.findByIdAndUpdate(page._id, page, {
            new: true,
        });
    }

    /**
     * Delete page entity by id
     * @param { Object } page
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async delete(page) {
        if (!page._id) {
            throw new Error(`Не указан идентификатор для [page]`);
        }
        return await PagesModel.findByIdAndDelete(page._id, page, {
            new: true,
        });
    }
}

export default new PagesService();
