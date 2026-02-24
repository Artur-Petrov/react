import type {IUserResponseModel} from "../models/IUserResponseModel.ts";
import type {ICartResponseModel} from "../models/ICartResponseModel.ts";

const baseUrl = import.meta.env.VITE_API_URL;

export const userService={
    getAllUsers: async():Promise<IUserResponseModel>=>{
        return await fetch(baseUrl + '/users')
            .then((response) => response.json())
    }
}

export const cartService={
    getAllCarts: async(userId:string):Promise<ICartResponseModel>=>{
        return await fetch(baseUrl + '/carts/user/' + userId)
            .then((response) => response.json())
    }
}