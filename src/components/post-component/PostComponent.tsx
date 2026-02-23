import type {FC} from "react";
import type {IPost} from "../../models/IPost.ts";

type PostPropType = {
    post: IPost;
}

const PostComponent: FC<PostPropType> = ({post}) => {
    return (
        <div className='bg-sky-600 m-4 p-4 rounded-2xl'>
            <div>{post.title}</div>
            <div>{post.userId}</div>
            <div>{post.body}</div>
        </div>
    );
};

export default PostComponent;