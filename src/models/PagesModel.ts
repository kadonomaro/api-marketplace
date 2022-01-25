import { Schema, model } from "mongoose";
import { IPage, IPageSeo } from "../interfaces";

const SEOSchema = new Schema<IPageSeo>({
    title: { type: String, required: true },
    description: { type: String },
});

const PagesModel = new Schema<IPage>(
    {
        slug: { type: String, required: true, unique: true },
        seo: { type: SEOSchema, required: true },
        title: { type: String },
        content: { type: String },
    },
    { timestamps: true }
);

export default model("pages", PagesModel);
