import type {FC} from "react";
import type {ITodo} from "../../models/ITodo.ts";

type TodoModel = {
    todo: ITodo;
}

export const TodoComponent: FC<TodoModel> = ({todo}) => {
    return (
        <div className="flex gap-5 flex-col m-5 p-10 bg-purple-500 text-xl text-white border-solid rounded-xl">
            <div>{todo.id}</div>
            <div>{todo.todo}</div>
            <div>{todo.userId}</div>
            <div>{todo.completed.toString()}</div>
        </div>
    );
};

export default TodoComponent;