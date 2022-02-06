import { Schema, model, Document } from "mongoose";

interface IPageSeo extends Document {
    title: string;
    description?: string;
}

interface IPage extends Document {
    slug: string;
    seo: IPageSeo;
    title?: string;
    content?: string;
}

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

export default model<IPage>("pages", PagesModel);
