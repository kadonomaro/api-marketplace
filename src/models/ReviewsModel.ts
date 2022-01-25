import { Schema, model } from "mongoose";
import { IReview } from "../interfaces";

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
