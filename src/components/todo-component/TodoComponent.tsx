import type {FC} from "react";
import type {ITodo} from "../../models/ITodo.ts";

type TodoModel = {
    todo: ITodo;
}

export const TodoComponent: FC<TodoModel> = ({todo}) => {
    return (
        <>
        <div>{todo.title}</div>
        <div>{todo.id}</div>
        <div>{todo.userId}</div>
        <div>{todo.completed.toString()}</div>
        </>
    );
};

export default TodoComponent;