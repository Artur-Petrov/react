import {useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {getAll} from "../../services/api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import PostComponent from "../post-component/PostComponent.tsx";

const PostsComponent = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getAll<IBaseResponseModel & {posts: IPost[]}>('/posts')
            .then(({posts}) => setPosts(posts))
    })

    return (
        <div>
            {
                posts.map((post: IPost) => <PostComponent post={post} key={post.id}/>)
            }
        </div>
    );
};

export default PostsComponent;