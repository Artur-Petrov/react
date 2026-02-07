import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";
import {getUsers} from "../../services/api.service.ts";


export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    // useEffect має два аргументи 1 - callback функцію і 2 - масив залежностей

    useEffect(() => {
        getUsers()
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


export default UsersComponent;