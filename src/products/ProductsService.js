import ProductsModel from "./ProductsModel.js";

class ProductsService {
    async create(product) {
        return await ProductsModel.create(product);
    }

    async getAll() {
        return await ProductsModel.find();
    }

    async getOne(id) {
        if (!id) {
            throw new Error("Не указан идентификатор товара");
        }
        return await ProductsModel.findById(id);
    }

    async update(product) {
        if (!product._id) {
            throw new Error("Не указан идентификатор товара");
        }
        return await ProductsModel.findByIdAndUpdate(product._id, product, {
            new: true,
        });
    }

    async delete(id) {
        if (!id) {
            throw new Error("Не указан идентификатор отзыва");
        }
        return await ProductsModel.findByIdAndDelete(id);
    }
}

export default new ProductsService();
