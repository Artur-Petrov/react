import type {IPostModel} from "./IPostModel.ts";

export interface IResponsePost {
    posts: IPostModel[],
    total: number,
    skip: number,
    limit: number
}