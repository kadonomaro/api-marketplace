import { Schema, model, Document } from "mongoose";

interface IArticle extends Document {
    title: string;
    description?: string;
    image: string;
    source?: string;
}

const ArticlesModel = new Schema<IArticle>(
    {
        title: { type: String, required: true },
        description: { type: String },
        image: { type: String, required: true },
        source: { type: String },
    },
    { timestamps: true }
);

export default model<IArticle>("articles", ArticlesModel);
