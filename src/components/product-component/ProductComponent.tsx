import type {FC} from "react";
import type {IProduct} from "../../models/IProduct.ts";

type ProductPropType = {
    product: IProduct;
}

export const ProductComponent: FC<ProductPropType> = ({product}) => {
    return (
        <div className='bg-sky-600 m-5 p-5 rounded-3xl'>
            <div>
                <h1>Title: {product.title} ID:{product.id}</h1>
            </div>
            <div>Description: {product.description}</div>
            <div>Category: {product.category}</div>
            <div>Price: {product.price}</div>
            <div>Discount: {product.discountPercentage}</div>
            <div>Rating: {product.rating}</div>
            <ul>Tags:
                {product.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
            ))}</ul>
            <div>Brand: {product.brand}</div>
            <div>Sku: {product.sku}</div>
            <div>Weight:{product.weight}</div>
            <div>
                <div>Height: {product.dimensions.height}</div>
                <div>Width: {product.dimensions.width}</div>
                <div>Depth: {product.dimensions.depth}</div>
            </div>
            <div>{product.warrantyInformation}</div>
            <div>{product.shippingInformation}</div>
            <div>{product.availabilityStatus}</div>
            <div className='list-disc list-inside ml-4 text-white'>
                {product.reviews.map((review) => (
                    <div>
                    <div>{review.rating}</div>
                    <div>{review.comment}</div>
                    <div>{review.date}</div>
                    <div>{review.reviewerName}</div>
                    <div>{review.reviewerEmail}</div>
                    </div>
            ))}</div>
            <div>{product.returnPolicy}</div>
            <div>{product.minimumOrderQuantity}</div>
            <div>
                <div>{product.meta.createdAt}</div>
                <div>{product.meta.updatedAt}</div>
                <div>{product.meta.barcode}</div>
                <div>{product.meta.qrCode}</div>
            </div>
            <div>{product.images.map((image) => (
                <div>
                    {image}
                </div>
            ))}</div>
            <div>{product.thumbnail}</div>
        </div>
    );
};
export default ProductComponent;