import {Link} from "react-router-dom";

const MenuComponent = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to={'/cars'}>Show all cars info</Link>
                </li>
                <li>
                    <Link to={'/cars/create'}>Create a car</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuComponent;