import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import UserComponent from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers()
            .then((allUsers) => {
                setUsers(allUsers);
            })
    }, [])

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent item={user} key={user.id} />)
            }
        </div>
    );
};

export default UsersComponent;