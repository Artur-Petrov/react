import {useEffect, useState} from "react";
import {UserService} from "../../services/api.service.ts";
import UserDummyJsonComponent from "./user/UserDummyJsonComponent.tsx";
import type {IUserDummy} from "../../models/UsersDummyJson/IUserDummy.ts";

const UsersDummyComponent = () => {
    const [users, setUsers] = useState<IUserDummy[]>([]);

    useEffect(() => {
        UserService.getUserDummy()
            .then(users => setUsers(users))
    })

    return (
        <div>
            {
                users.map((user: IUserDummy) => <UserDummyJsonComponent key={user.id} user={user}/>)
            }
        </div>
    );
};

export default UsersDummyComponent;