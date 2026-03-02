import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <>
            <div>
                <ul> Users
                    <li><Link to={'jsonplaceholder'}>JsonPlaceHolder Users</Link></li>
                    <li><Link to={'dummyjson'}>DummyJson Users</Link></li>
                </ul>
            </div>
            <Outlet/>
        </>
    );
};

export default UsersPage;