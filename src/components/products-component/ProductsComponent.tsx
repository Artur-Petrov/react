import {useEffect, useState} from "react";
import {getProducts} from "../../service/api.service.ts";
import type {IProduct} from "../../models/IProduct.ts";
import ProductComponent from "../product-component/ProductComponent.tsx";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        getProducts()
            .then((productsResponse) => {
                setProducts(productsResponse);
            })
    }, [])

    return (
        <>
            {
                products.map((product: IProduct) => <ProductComponent product={product} key={product.id} />)
            }
        </>
    );
};
export default ProductsComponent;