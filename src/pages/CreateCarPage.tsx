import {Outlet} from "react-router-dom";
import CreateCarComponent from "../components/cars-components/CreateCarComponent.tsx";

const CreateCarPage = () => {
    return (
        <div>
            Create a car
            <Outlet/>
            <CreateCarComponent/>
        </div>
    );
};

export default CreateCarPage;