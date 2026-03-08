import type {IUser} from "./IUser.ts";

export interface IResponseModel {
    users: IUser[];
    total: number;
    skip: number;
    limit: number;
}