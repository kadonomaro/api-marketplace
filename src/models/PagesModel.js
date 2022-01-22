import mongoose from "mongoose";

const SEOSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
});

const PagesModel = new mongoose.Schema(
    {
        slug: { type: String, required: true, unique: true },
        seo: { type: SEOSchema, required: true },
        title: { type: String },
        content: { type: String },
    },
    { timestamps: true }
);

export default mongoose.model("pages", PagesModel);
