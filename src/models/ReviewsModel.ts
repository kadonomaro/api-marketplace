import { Schema, model, Document } from "mongoose";

interface IReview extends Document {
    name: string;
    author: string;
    description: string;
    image: string;
    source: string;
    isActive: boolean;
}

const ReviewsModel = new Schema<IReview>(
    {
        name: { type: String, required: true },
        author: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        source: { type: String, required: true },
        isActive: { type: Boolean, default: true },
    },
    { timestamps: true }
);

export default model<IReview>("reviews", ReviewsModel);
