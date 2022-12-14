export interface ProductCharacteristic {
    name: string;
    value: string;
}

export interface Blog {
    text: string;
    _id: string;
    bigImage: string;
}

export interface IReview {
    _id: string;
    name: string;
    title: string;
    description: string;
    rating: number;
    createdAt: Date;
}

export interface IProduct {
    _id: string;
    categories: string[];
    tags: string[];
    title: string;
    image: string;
    description: string;
    disadvantages: string;
    link: string;
    price: number;
    credit: number;
    oldPrice: number;
    characteristics: ProductCharacteristic[];
    advantages: string;
    initialRating: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    html: string;
    blog: Blog;
    companyId: string;
    clicks: number;
    reviews: IReview[];
    reviewCount: number;
    reviewAvg?: number;
}
