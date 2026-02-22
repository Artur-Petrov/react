import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    Users
                    <ul>
                        <li><Link to={'users/jsonplaceholder'}>JsonPlaceHolder</Link></li>
                        <li><Link to={'users/dummyjson'}>DummyJson</Link></li>
                    </ul>
                </li>

                <li>
                    Posts
                    <ul>
                        <li><Link to={'posts/jsonplaceholder'}>JsonPlaceHolder</Link></li>
                        <li><Link to={'posts/dummyjson'}>DummyJson</Link></li>
                    </ul>
                </li>

                <li>
                    Comments
                    <ul>
                        <li><Link to={'comments/jsonplaceholder'}>JsonPlaceHolder</Link></li>
                        <li><Link to={'comments/dummyjson'}>DummyJson</Link></li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default Menu;