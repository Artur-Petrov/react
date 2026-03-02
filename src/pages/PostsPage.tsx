import {Link, Outlet} from "react-router-dom";

const PostsPage = () => {
    return (
        <div>
            <ul> Posts
                <li><Link to={'jsonplaceholder'}>JsonPlaceHolder</Link></li>
                <li><Link to={'dummyjson'}>DummyJson</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default PostsPage;