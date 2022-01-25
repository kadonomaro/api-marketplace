export interface IPageSeo {
    title: string;
    description?: string;
}

export interface IPage {
    _id?: number | string;
    slug: string;
    seo: IPageSeo;
    title: string;
    content: string;
}

export interface IArticle {
    title: string;
    description?: string;
    image: string;
    source?: string;
}

export interface IProduct {
    name: string;
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
}

export interface IReview {
    author: string;
    description: string;
    image: string;
    source: string;
}
