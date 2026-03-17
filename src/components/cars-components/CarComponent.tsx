import type {FC} from "react";
import type {ICar} from "../../models/ICar.ts";
import "../cars-components/styles/Car.css"

type CarsPropType = {
    car: ICar;
}

const CarComponent:FC<CarsPropType> = ({car}) => {
    return (
        <div className='car-card'>
            <div>{car.id} {car.brand}</div>
            <div>Price: {car.price}</div>
            <div>Year: {car.year}</div>
        </div>
    );
};

export default CarComponent;