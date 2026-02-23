import type {ICommentsDummy} from "../ICommentsDummy.ts";

export interface ICommentsResponse {
    comments: ICommentsDummy[];
    total: number;
    skip: number;
    limit: number;
}