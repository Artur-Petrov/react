import type {IUser} from "../models/IUser.ts";
import type {IResponseModel} from "../models/IResponseModel.ts";

export const getAllUsers = async(page:string):Promise<IUser[]> => {
    const limit = 30
    const skip = limit*(+page) - limit;
    const response:IResponseModel = await fetch(import.meta.env.VITE_API_DUMMY + '/users' + '?skip=' + skip)
        .then((response) => response.json())
    return response.users;
}