import type {IUser} from "../models/UsersJsonPlaceHolder/IUser.ts";
import type {IUserResponse} from "../models/UsersDummyJson/response-model/IUserResponse.ts";
import type {IUserDummy} from "../models/UsersDummyJson/IUserDummy.ts";
import type {IPosts} from "../models/PostsJsonPlaceHolder/IPosts.ts";
import type {IPostsDummy} from "../models/PostsDummyJson/IPostsDummy.ts";
import type {IPostsResponse} from "../models/PostsDummyJson/response-model/IPostsResponse.ts";
import type {IComment} from "../models/CommentsJsonPlaceHolder/IComment.ts";
import type {ICommentsDummy} from "../models/CommentsDummyJson/ICommentsDummy.ts";
import type {ICommentsResponse} from "../models/CommentsDummyJson/resaponse-model/ICommentsResponse.ts";

export const UserService = {

    getUserJson: async (): Promise<IUser[]> => {
        return await fetch(import.meta.env.VITE_JSON_API + '/users')
            .then((response) => response.json())
    },

    getUserDummy: async (): Promise<IUserDummy[]> => {
        const userDummyResponse: IUserResponse = await fetch(import.meta.env.VITE_DUMMY_API + '/users')
            .then((response) => response.json())
        return userDummyResponse.users;
    }
}

export const PostService = {
    getPostsJson: async (): Promise<IPosts[]> => {
        return await fetch(import.meta.env.VITE_JSON_API + '/posts')
            .then((response) => response.json())
    },
    getPostsDummy: async (): Promise<IPostsDummy[]> => {
        const postsDummyResponse: IPostsResponse = await fetch(import.meta.env.VITE_DUMMY_API + '/posts')
            .then((response) => response.json())
        return postsDummyResponse.posts
    }
}

export const CommentService = {
    getCommentsJson: async ():Promise<IComment[]>=>{
        return await fetch(import.meta.env.VITE_JSON_API + '/comments')
            .then((response) => response.json())
    },
    getCommentsDummy: async ():Promise<ICommentsDummy[]> => {
        const commentsResponse: ICommentsResponse = await fetch(import.meta.env.VITE_DUMMY_API + '/comments')
            .then((response) => response.json())
        return commentsResponse.comments;
    }
}