import type {IUser} from "../../models/UsersJsonPlaceHolder/IUser.ts";
import {useEffect, useState} from "react";
import {UserService} from "../../services/api.service.ts";
import UserJsonComponent from "./user/UserJsonComponent.tsx";

export const UsersJsonComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        UserService.getUserJson()
            .then(users => setUsers(users));
    },[])

    return (
        <div>
            {
                users.map((user: IUser) => <UserJsonComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersJsonComponent;