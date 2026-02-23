import {useEffect, useState} from "react";
import type {IPostsDummy} from "../../models/PostsDummyJson/IPostsDummy.ts";
import {PostService} from "../../services/api.service.ts";
import PostDummyJsonComponent from "./post/PostDummyJsonComponent.tsx";

const PostsDummyComponent = () => {
    const [posts, setPosts] = useState<IPostsDummy[]>([]);
    useEffect(() => {
        PostService.getPostsDummy()
            .then(posts => setPosts(posts));
    }, [])

    return (
        <div>
            {
                posts.map((post: IPostsDummy) => <PostDummyJsonComponent post={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsDummyComponent;