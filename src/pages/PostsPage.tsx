import {useParams} from "react-router-dom";
import PostsComponent from "../components/posts/PostsComponent.tsx";

const PostsPage = () => {

    // щоб з урли posts/:userID дістати айді ми використовуємо хук useParams
    const {userId} = useParams(); //вертає string or undefiend

    return (
        <div>
            {
                userId && <PostsComponent userId={userId} />
            }
        </div>
    );
};

export default PostsPage;