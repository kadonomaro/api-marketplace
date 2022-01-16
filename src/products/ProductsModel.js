import mongoose from "mongoose";

const ProductsModel = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true },
});

export default mongoose.model("Products", ProductsModel);
