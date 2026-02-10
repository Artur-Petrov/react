import type {IPostModel} from "../models/IPostModel.ts";

export const getPosts = async (): Promise<IPostModel[]> => {
    return await fetch(import.meta.env.VITE_API_URL)
        .then((response) => response.json())
}