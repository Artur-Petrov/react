import {useEffect, useState} from "react";
import type {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api.service.ts";
import type {IUserResponseModel} from "../../models/IUserResponseModel.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getAllUsers()
            .then(({users}:IUserResponseModel) =>setUsers(users))
    }, []);

    return (
        <div>
            {
                users.map((user: IUser) => <UserComponent user={user} key={user.id} />)
            }
        </div>
    );
};

export default UsersComponent;