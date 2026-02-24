import type {FC} from "react";
import type {ICart} from "../../models/ICart.ts";

type CartsPropType={
    cart: ICart;
}


const CartComponent:FC<CartsPropType> = ({cart}) => {
    return (
        <div>
            <div>{cart.total}</div>
        </div>
    );
};

export default CartComponent;