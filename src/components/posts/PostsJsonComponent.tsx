import type {IPosts} from "../../models/PostsJsonPlaceHolder/IPosts.ts";
import {PostService} from "../../services/api.service.ts";
import {useEffect, useState} from "react";
import PostJsonComponent from "./post/PostJsonComponent.tsx";

const PostsJsonComponent = () => {
    const [posts, setPosts] = useState<IPosts[]>([])

    useEffect(() => {
        PostService.getPostsJson()
            .then(posts => setPosts(posts))
    },[])
    return (
        <div>
            {
                posts.map((post:IPosts) => <PostJsonComponent post={post} key={post.id} />)
            }
        </div>
    );
};

export default PostsJsonComponent;