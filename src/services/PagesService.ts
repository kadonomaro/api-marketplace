import PagesModel, { IPage } from "../models/PagesModel";

class PagesService {
    /**
     * Create page entity
     * @param { Object } page
     * @return {Promise<HydratedDocument<any, {}, {}>[]>}
     */
    async create(page: object): Promise<IPage> {
        return await PagesModel.create(page);
    }

    /**
     * Get page entity by slug
     * @param { String } slug
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async getBySlug(slug: string): Promise<any> {
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
    async update(page: IPage): Promise<any> {
        if (!page._id) {
            throw new Error(`Не указан идентификатор для [page]`);
        }
        return await PagesModel.findByIdAndUpdate(page._id, page, {
            new: true,
        });
    }

    /**
     * Delete page entity by id
     * @param { String, Number } id
     * @return {Promise<Query<any, any, {}, any>>}
     */
    async delete(id: string | number): Promise<any> {
        if (!id) {
            throw new Error(`Не указан идентификатор для [page]`);
        }
        return await PagesModel.findByIdAndDelete(id);
    }
}

export default new PagesService();
