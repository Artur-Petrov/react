import type {IPostsDummy} from "../IPostsDummy.ts";

export interface IPostsResponse {
    posts: IPostsDummy[];
    total: number;
    skip: number;
    limit: number;
}