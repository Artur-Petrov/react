import {useEffect, useState} from "react";
import type {ICar} from "../../models/ICar.ts";
import {getAllCars} from "../../services/api.services.ts";
import CarComponent from "./CarComponent.tsx";

const CarsComponent = () => {

    const [cars, setCars] = useState<ICar[]>([]);

    useEffect(() => {
        getAllCars()
            .then(data => setCars(data));
    }, []);

    return (
        <div >
            {
                cars.map((car: ICar) => <CarComponent car={car} key={car.id} />)
            }
        </div>
    );
};

export default CarsComponent;