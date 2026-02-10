import {useEffect, useState} from "react";
import {getPosts} from "../../services/api.service.ts";
import PostComponent from "../post-component/PostComponent.tsx";
import type {IPostModel} from "../../models/IPostModel.ts";

export const PostsComponent = () => {

    const [posts, setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        getPosts()
            .then((response) => {
                setPosts(response);
            });
    })

    return (
        <>
            {
                posts.map((post) => <PostComponent post={post} key={post.id} />)
            }
        </>
    );
};
export default PostsComponent;