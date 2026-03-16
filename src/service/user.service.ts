import axios from "axios";
import type {IUser} from "../models/user/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {'Content-Type': 'application/json'},
});

axiosInstance.interceptors.request.use((request)=>{

    request.headers.set('XXX', 'zzzz');
    console.log(request.method)
    return request;
});

export const getAllUsers = async ():Promise<IUser[]> => {
    const {data} = await axiosInstance.get<IUser[]>('/users');
    return data;
}

export const saveUser = async (user:IUser):Promise<IUser> => {
    const {data} = await axiosInstance.post<IUser>('/users', user);
    return data;
}



// axiosInstance.interceptors.response.use((response)=>{
//
//     return response;
// })