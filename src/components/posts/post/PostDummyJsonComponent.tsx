import type {FC} from "react";
import type {IPostsDummy} from "../../../models/PostsDummyJson/IPostsDummy.ts";

type PostsDummyPropType={
    post: IPostsDummy;
}

const PostDummyJsonComponent: FC<PostsDummyPropType> = ({post}) => {

    return (
        <div className='bg-sky-500 rounded-xl m-4 p-4'>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
            <div>{post.tags.map((tag: string, index: number) =>(
                <div key={index}>{tag}</div>
            ))}</div>
            <div>{post.reactions.likes}</div>
            <div>{post.reactions.dislikes}</div>
            <div>{post.views}</div>
            <div>{post.userId}</div>
        </div>
    );
};

export default PostDummyJsonComponent;