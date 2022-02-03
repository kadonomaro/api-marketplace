import { Document } from "mongoose";

export interface IPageSeo extends Document {
    title: string;
    description?: string;
}

export interface IPage extends Document {
    slug: string;
    seo: IPageSeo;
    title?: string;
    content?: string;
}

export interface IArticle extends Document {
    title: string;
    description?: string;
    image: string;
    source?: string;
}

export interface IProduct extends Document {
    name: string;
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
}

export interface IReview extends Document {
    author: string;
    description: string;
    image: string;
    source: string;
}
