import {Link, Outlet} from "react-router-dom";

const UsersPage = () => {
    return (
        <div>
            <ul> Users
                <li><Link to={'jsonplaceholder'}>JsonPlaceHolder</Link></li>
                <li><Link to={'dummyjson'}>DummyJson</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default UsersPage;