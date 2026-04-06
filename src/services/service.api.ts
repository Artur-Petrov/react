import axios from "axios";
import type {IUserWithTokens} from "../model/IUserWithTokens.ts";
import type {IProduct} from "../model/IProduct.ts";
import type {IProductsResponseModel} from "../model/IProductsResponseModel.ts";
import {retriveLocalStorage} from "./helpers.ts";
import type {ITokenPair} from "../model/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expireInMins: number
}

const axiosInstance =  axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});

axiosInstance.interceptors.request.use((request) =>{

    if(request.method?.toUpperCase() === "GET"){
        request.headers.authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return request;
})

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

export const refresh = async() =>{
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/auth/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expireInMins: 1
    });
    iUserWithTokens.accessToken = accessToken;
    iUserWithTokens.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithTokens));
}