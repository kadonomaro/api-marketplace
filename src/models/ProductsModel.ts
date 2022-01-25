import { Schema, model } from "mongoose";
import { IProduct } from "../interfaces";

const ProductsModel = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        shortName: { type: String },
        price: { type: Number, required: true },
        discountPrice: { type: Number },
        image: { type: String, required: true },
    },
    { timestamps: true }
);

export default model<IProduct>("products", ProductsModel);
