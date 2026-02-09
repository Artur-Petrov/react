import {useEffect, useState} from "react";
import type {ITodo} from "../../models/ITodo.ts";
import {getTodos} from "../../services/api.service.ts";
import TodoComponent from "../todo-component/TodoComponent.tsx";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        getTodos()
            .then((todos) => {
                setTodos(todos);
            });
    },[])

    return (
        <div>
            {
                todos.map(todo=><TodoComponent todo={todo} key={todo.id}/>)
            }
        </div>
    );
};

export default TodoComponents;