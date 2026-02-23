import type {IReactionsDummy} from "./IReactionsDummy.ts";

export interface IPostsDummy {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IReactionsDummy;
    views: number;
    userId: number;
}