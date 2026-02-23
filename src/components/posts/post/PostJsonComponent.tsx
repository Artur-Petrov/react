import type {FC} from "react";
import type {IPost} from "../../../models/UsersJsonPlaceHolder/IPost.ts";

type PostsJsonPropType={
    post: IPost;
}

const PostJsonComponent:FC<PostsJsonPropType> = ({post}) => {
    return (
        <div className='bg-sky-500 rounded-xl m-4 p-4'>
            <h1>{post.title}</h1>
            <h2>{post.id}</h2>
            <div>{post.userId}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostJsonComponent;