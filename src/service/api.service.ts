import type {IProduct} from "../models/IProduct.ts";
import type {IResponseProduct} from "../models/IResponseProduct.ts";

export const getProducts = async ():Promise<IProduct[]> =>{
    const responseProducts: IResponseProduct = await fetch(import.meta.env.VITE_API_URL + '/products')
        .then((response) => response.json())
    return responseProducts.products;
}