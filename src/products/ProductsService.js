import ProductsModel from "./ProductsModel.js";
import FileService from "../service/FileService.js";

class ProductsService {
    async create(product, image) {
        const imageName = FileService.save(image, "products");
        return await ProductsModel.create({ ...product, image: imageName });
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
