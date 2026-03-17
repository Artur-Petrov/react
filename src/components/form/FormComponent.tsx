import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {addCar} from "../../services/api.services.ts";
import {carValidator} from "../../validators/CarValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

const FormComponent = () => {

    const {register, handleSubmit, formState: {errors}} = useForm<ICar>({
        mode: 'all',
        resolver: joiResolver(carValidator)
    })

    const handler = (data: ICar) => {
        addCar(data);
    }

    return (
        <>
            <form onSubmit={handleSubmit(handler)}>

                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>
                <div>
                    <input type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button>save car</button>
            </form>
        </>
    );
};

export default FormComponent;