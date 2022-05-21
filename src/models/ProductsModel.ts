import { Schema, model, Document } from "mongoose";

interface IProduct extends Document {
    name: string;
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
    isActive: boolean;
}

const ProductsModel = new Schema<IProduct>(
    {
        name: { type: String, required: true },
        shortName: { type: String },
        price: { type: Number, required: true },
        discountPrice: { type: Number },
        image: { type: String, required: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default model<IProduct>("products", ProductsModel);
