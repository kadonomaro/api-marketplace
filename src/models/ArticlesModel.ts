import { Schema, model } from "mongoose";
import { IArticle } from "../interfaces";

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
