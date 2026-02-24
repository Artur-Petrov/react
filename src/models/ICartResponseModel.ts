import type {ICart} from "./ICart.ts";

export interface ICartResponseModel {
    limit: number;
    skip: number;
    total: number;
    carts: ICart[];
}