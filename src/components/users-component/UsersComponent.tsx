import {useEffect, useState} from "react";
import {getAll} from "../../services/api.service.ts";
import type {IBaseResponseModel} from "../../models/IBaseResponseModel.ts";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user-component/UserComponent.tsx";

const UsersComponent = () => {
    const [users,setUser] = useState<IUser[]>([]);

    useEffect(() => {
        getAll<IBaseResponseModel & {users: IUser[]}>('/users')
            .then(({users}) => setUser(users))
    })

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;