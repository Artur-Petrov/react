import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <div>
            <ul> Comments
                <li><Link to={'jsonplaceholder'}>JsonPlaceHolder</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default CommentsPage;