import { Schema, model, Document } from "mongoose";

export interface IPage extends Document {
    slug: string;
    seo: IPageSeo;
    name?: string;
    content?: string;
    isActive: boolean;
}

interface IPageSeo extends Document {
    title: string;
    description?: string;
}

const SEOSchema = new Schema<IPageSeo>({
    title: { type: String, required: true },
    description: { type: String },
});

const PagesModel = new Schema<IPage>(
    {
        slug: { type: String, required: true, unique: true },
        seo: { type: SEOSchema, required: true },
        name: { type: String },
        content: { type: String },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default model<IPage>("pages", PagesModel);
