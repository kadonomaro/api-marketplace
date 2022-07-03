export interface Article {
    id: string;
    name: string;
    text?: string;
    image: string;
    source?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Product {
    name: string;
    shortName?: string;
    price: number;
    discountPrice?: number;
    image: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Review {
    name: string;
    author: string;
    description: string;
    image: string;
    source: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Page {
    slug: string;
    seo: PageSeo;
    name?: string;
    content?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

interface PageSeo {
    title: string;
    description?: string;
}
