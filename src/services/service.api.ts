import axios from "axios";
import type {IUserWithTokens} from "../model/IUserWithTokens.ts";
import type {IProduct} from "../model/IProduct.ts";
import type {IProductsResponseModel} from "../model/IProductsResponseModel.ts";

const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

type LoginData = {
    username: string;
    password: string;
    expireInMins: number
}

export const login = async ({username, password, expireInMins}: LoginData):Promise<IUserWithTokens>=>{
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expireInMins});
    console.log(userWithTokens);
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

export const loadAuthProducts = async ():Promise<IProduct[]>=>{
    const {data} = await axiosInstance.get<IProductsResponseModel>('/products');
    return data.products;

}