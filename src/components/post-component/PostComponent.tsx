import type {FC} from "react";
import type {IPostModel} from "../../models/IPostModel.ts";

type PostModelProp = {
    post: IPostModel;
}

export const PostComponent: FC<PostModelProp> = ({post}) => {

    return (
        <div className='bg-sky-600 m-4 p-4 rounded-2xl'>
            <div>Post title: {post.title}</div>
            <div>Main part: {post.body}</div>
            <div>User ID: {post.userId}</div>
            <div>ID: {post.id}</div>
            <div>Views: {post.views}</div>

            <div>
                <div>Tags: {post.tags.map((tag: string) => (
                    <div>
                        {tag}
                    </div>
                ))}</div>
            </div>

            <div>
                <div>Likes: {post.reactions.likes}</div>
                <div>Dislikes: {post.reactions.dislikes}</div>
            </div>
        </div>
    );
};
export default PostComponent;