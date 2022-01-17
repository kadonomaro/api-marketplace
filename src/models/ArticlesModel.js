import mongoose from "mongoose";

const ArticlesModel = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true },
    source: { type: String },
});

export default mongoose.model("articles", ArticlesModel);
