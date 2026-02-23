import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";

type UserPropType={
    user: IUser;
}

const UserComponent:FC<UserPropType> = ({user}) => {
    return (
        <div className='bg-sky-600 m-4 p-4 rounded-2xl'>
            <div>{user.username}</div>
            <div>{user.id}</div>
            <div>{user.macAddress}</div>
        </div>
    );
};

export default UserComponent;