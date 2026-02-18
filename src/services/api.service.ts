import type {IUser} from "../models/IUser.ts";
import {urls} from "./urls.ts";
import type {IPost} from "../models/IPost.ts";

export const userService ={
    getUsers: async ():Promise<IUser[]>=>{
        return await fetch(import.meta.env.VITE_API_URL + '/users/')
            .then((response) => response.json())

    }
}

export const postService={
    getAllPostsOfUserById: async (id: number):Promise<IPost[]>=>{
        return await fetch(urls.posts.userPostByID(id))
            .then((response) => response.json())

    }
}