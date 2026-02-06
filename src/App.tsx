import {useEffect, useState} from "react";
import type {IUser} from "./models/IUser.ts";
import UserComponent from "./UserComponent.tsx";

const App = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    // буде нескінченний цикл так як useState буде rerender сторінку тому цей варіант не підходить
    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then((response) => response.json())
    //     .then((response) => {
    //         setUsers(response);
    //     });


    // useEffect має два аргументи 1 - callback функцію і 2 - масив залежностей

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((response) => {
                setUsers(response);
            });
        // useEffect відповідно має return (unsubscribe function) яка є callback
        return()=>{
            console.log('done');
        }
    }, [])
    // якщо масив пустий [] то useEffect виконається тільки 1 раз
    return (
        <div>
            {
                users.map((user) => (<UserComponent key={user.id} item={user}/>))
            }
        </div>
    );
};

export default App;