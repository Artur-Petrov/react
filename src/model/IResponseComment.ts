import type {IComment} from "./IComment.ts";

export interface IResponseComment {
    comments: IComment[],
    total: number,
    skip: number,
    limit: number
}