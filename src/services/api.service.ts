import type {ITodo} from "../models/ITodo.ts";
import type {IResponseTodos} from "../models/IResponseTodos.ts";

export const getTodos = async():Promise<ITodo[]> =>{
    const responseTodos: IResponseTodos = await fetch(import.meta.env.VITE_API_URL + '/todos')
        .then((value) => value.json())
    return responseTodos.todos
}
