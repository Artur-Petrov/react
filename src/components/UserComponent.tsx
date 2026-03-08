import type {FC} from "react";
import type {IUser} from "../models/IUser.ts";

type UsersPropType={
    user: IUser;
}

const UserComponent:FC<UsersPropType> = ({user}) => {
    return (
        <div className='bg-sky-600 p-4 m-4 rounded-2xl'>
            {user.id} {user.username} {user.phone}
        </div>
    );
};

export default UserComponent;