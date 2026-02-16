import type {IPostModel} from "../models/IPostModel.ts";
import type {IResponsePost} from "../models/IResponsePosts.ts";

export const getPosts = async (): Promise<IPostModel[]> => {
    const responsePosts: IResponsePost =  await fetch(import.meta.env.VITE_API_URL + '/posts')
        .then((response) => response.json())
    return responsePosts.posts
}