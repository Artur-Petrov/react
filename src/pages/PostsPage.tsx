import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <>
            <div>
                <ul> Posts
                    <li><Link to={'jsonplaceholder'}>JsonPlaceHolder Posts</Link></li>
                    <li><Link to={'dummyjson'}>DummyJson Posts</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
};

export default PostsPage;