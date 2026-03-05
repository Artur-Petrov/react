import type {IUser} from "./IUser.ts";
import type {ISupport} from "./ISupport.ts";

export interface IReqResInResponse {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: IUser[];
    support: ISupport;
}