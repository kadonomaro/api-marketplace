import { Schema, model } from "mongoose";

interface IReview {
    author: string;
    description: string;
    image: string;
    source: string;
}

const ReviewsModel = new Schema<IReview>(
    {
        author: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        source: { type: String, required: true },
    },
    { timestamps: true }
);

export default model("reviews", ReviewsModel);
