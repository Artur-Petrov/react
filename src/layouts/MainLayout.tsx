import {Outlet} from "react-router-dom";
import MenuComponent from "../components/menu/MenuComponent.tsx";

const MainLayout = () => {
    return (
        <div>
            <div>Main Layout</div>
            <hr/>
            <MenuComponent/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;