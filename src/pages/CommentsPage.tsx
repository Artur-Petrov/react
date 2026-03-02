import {Link, Outlet} from "react-router-dom";

const CommentsPage = () => {
    return (
        <>
            <div>
                <ul> Comments
                    <li><Link to={'jsonplaceholder'}>JsonPlaceHolder Comments</Link></li>
                    <li><Link to={'dummyjson'}>DummyJson Comments</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
};

export default CommentsPage;