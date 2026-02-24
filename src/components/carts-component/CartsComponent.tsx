import type {ICart} from "../../models/ICart.ts";
import {useEffect, useState} from "react";
import {cartService} from "../../services/api.service.ts";
import type {ICartResponseModel} from "../../models/ICartResponseModel.ts";
import {useParams} from "react-router-dom";
import CartComponent from "./CartComponent.tsx";

const CartsComponent = () => {

    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([]);

    useEffect(() => {
        if (id) {
            cartService.getAllCarts(id)
                .then(({carts}: ICartResponseModel) => {
                    setCarts(carts)
                })
        }
    }, [id])

    return (
        <div>
            {
                carts.map((cart: ICart) => <CartComponent key={cart.id} cart={cart}/>)
            }
        </div>
    );
};

export default CartsComponent;