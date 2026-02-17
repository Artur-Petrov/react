import type {IUser} from "../models/IUser.ts";

export const userService ={
    getUsers: async ():Promise<IUser[]>=>{
        return await fetch(import.meta.env.VITE_API_URL + '/users/')
            .then((response) => response.json())

    }
}