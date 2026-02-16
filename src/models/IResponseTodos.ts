import type {ITodo} from "./ITodo.ts";

export interface IResponseTodos {
    todos: ITodo[],
    total: number,
    skip: number,
    limit: number
}