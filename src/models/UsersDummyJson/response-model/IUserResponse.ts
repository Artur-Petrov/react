import type {IUserDummy} from "../IUserDummy.ts";

export interface IUserResponse {
    users: IUserDummy[];
    total: number;
    skip: number;
    limit: number;
}