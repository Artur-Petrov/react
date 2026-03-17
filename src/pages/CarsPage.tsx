import {Outlet} from "react-router-dom";
import CarsComponent from "../components/cars-components/CarsComponent.tsx";

const CarsPage = () => {
    return (
        <div>
            Cars Page
            <Outlet/>
            <CarsComponent/>
        </div>
    );
};

export default CarsPage;