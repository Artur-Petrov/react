import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPropType={
    users: IUser;
}

const UserComponent:FC<UserPropType> = ({users}) => {
    return (
        <div>
            {users.first_name} {users.last_name}
        </div>
    );
};

export default UserComponent;