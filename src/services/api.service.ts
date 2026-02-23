import type {IUser} from "../models/UsersJsonPlaceHolder/IUser.ts";
import type {IUserResponse} from "../models/UsersDummyJson/response-model/IUserResponse.ts";
import type {IUserDummy} from "../models/UsersDummyJson/IUserDummy.ts";
import type {IPosts} from "../models/PostsJsonPlaceHolder/IPosts.ts";

export const UserService = {

    getUserJson: async (): Promise<IUser[]> => {
        return await fetch(import.meta.env.VITE_JSON_API + '/users')
            .then((response) => response.json())
    },

    getUserDummy: async (): Promise<IUserDummy[]> => {
       const userDummyResponse: IUserResponse =  await fetch(import.meta.env.VITE_DUMMY_API + '/users')
            .then((response) => response.json())
            return userDummyResponse.users;
    }
}

export const PostService = {
    getPostsJson: async():Promise<IPosts[]>=>{
        return await fetch(import.meta.env.VITE_JSON_API + '/posts')
            .then((response) => response.json())
    }
}
