import type {FC} from "react";
import type {IUser} from "../../models/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserPropType = {
    item: IUser;
}

const UserComponent: FC<UserPropType> = ({item}) => {
    // для програмного переходу на іншу сторніку через button є хук useNavigate
    const navigateFunction = useNavigate(); // це фуцнкція


    const handleOnClick = ()=>{
        navigateFunction('details', {state:item})
    };
    return (
        <div>
            <Link to={'details'} state={item}>{item.username}</Link>

            <button onClick={handleOnClick}>go to details</button>
        </div>
    );
};

export default UserComponent;