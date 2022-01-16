import mongoose from "mongoose";

const ReviewsModel = new mongoose.Schema({
    author: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    source: { type: String, required: true },
});

export default mongoose.model("reviews", ReviewsModel);
