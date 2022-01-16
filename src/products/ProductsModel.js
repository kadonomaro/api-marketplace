import mongoose from "mongoose";

const ProductsModel = new mongoose.Schema({
    name: { type: String, required: true },
    shortName: { type: String },
    price: { type: Number, required: true },
    discountPrice: { type: Number },
    image: { type: String, required: true },
});

export default mongoose.model("products", ProductsModel);
