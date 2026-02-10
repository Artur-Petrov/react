import type {FC} from "react";
import type {IPostModel} from "../../models/IPostModel.ts";

type PostModelProp = {
    post: IPostModel;
}

export const PostComponent: FC<PostModelProp> = ({post}) => {

    return (
        <div>
            <div>Post title: {post.title}</div>
            <div>Main part: {post.body}</div>
            <div>User ID: {post.userId}</div>
            <div>ID: {post.id}</div>
        </div>
    );
};
export default PostComponent;