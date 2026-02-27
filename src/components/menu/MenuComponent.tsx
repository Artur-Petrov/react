import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'users'}>Users</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;