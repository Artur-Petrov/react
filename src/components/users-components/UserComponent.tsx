import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";

type UserPropType={
    user: IUser;
}

const UserComponent:FC<UserPropType> = ({user}) => {

    const navigate = useNavigate();
    const onClickHandlerNavigate = ()=>{
        navigate('/users/' + user.id + '/carts');
    }

    return (
        <div>
            <div>{user.username}</div>
            <div>{user.email}</div>

            <button onClick={onClickHandlerNavigate}>go to cart</button>
        </div>
    );
};

export default UserComponent;