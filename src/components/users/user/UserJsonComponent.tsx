import type {FC} from "react";
import type {IUser} from "../../../models/UsersJsonPlaceHolder/IUser.ts";

type UserJsonTypeProp = {
    user: IUser;
}

export const UserJsonComponent:FC<UserJsonTypeProp> = ({user}) => {

    return (
        <div className='bg-sky-500 rounded-xl m-4 p-4'>
        <div>{user.id}</div>
        <div>{user.name}</div>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>{user.phone}</div>
        <div>{user.website}</div>
        <div>{user.address.street}</div>
        <div>{user.address.suite}</div>
        <div>{user.address.city}</div>
        <div>{user.address.zipcode}</div>
        <div>{user.address.geo.lat}</div>
        <div>{user.address.geo.lng}</div>
        <div>{user.company.name}</div>
        <div>{user.company.catchPhrase}</div>
        <div>{user.company.bs}</div>

        </div>
    );
};

export default UserJsonComponent;