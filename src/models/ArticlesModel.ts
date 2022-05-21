import { Schema, model, Document } from "mongoose";

interface IArticle extends Document {
    name: string;
    text?: string;
    image: string;
    source?: string;
    isActive: boolean;
}

const ArticlesModel = new Schema<IArticle>(
    {
        name: { type: String, required: true },
        text: { type: String },
        image: { type: String, required: true },
        source: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default model<IArticle>("articles", ArticlesModel);
