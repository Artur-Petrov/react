export interface IProduct {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: string;
    dimensions: IDimensionsProduct;
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: IReviewsProduct[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: IMetaProduct;
    images: string[];
    thumbnail: string;
}
export interface IDimensionsProduct {
    width: number;
    height: number;
    depth: number;
}
export interface IReviewsProduct {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}
export interface IMetaProduct {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}