export interface Article {
    name: string;
    text?: string;
    image: string;
    source?: string;
    isActive: boolean;
    createdAt: Date;
}

export interface Product {
    name: string;
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
    isActive: boolean;
    createdAt: Date;
}

export interface Review {
    name: string;
    author: string;
    description: string;
    image: string;
    source: string;
    isActive: boolean;
    createdAt: Date;
}

export interface Page {
    slug: string;
    seo: PageSeo;
    name?: string;
    content?: string;
    isActive: boolean;
    createdAt: Date;
}

interface PageSeo {
    title: string;
    description?: string;
}
