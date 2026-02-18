import {type FC, useEffect, useState} from "react";
import type {IPost} from "../../models/IPost.ts";
import {postService} from "../../services/api.service.ts";

type PostsPropType={
    userId: string;
}

const PostsComponent: FC<PostsPropType> = ({userId}) => {

    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (userId){
            postService.getAllPostsOfUserById(+userId)
                .then(posts => {
                    setPosts(posts);
                })
        }
    }, [userId])

    return (
        <div>
            {
                posts.map((post: IPost) => <div key={post.id}>{post.title}</div>)
            }
        </div>
    );
};

export default PostsComponent;