import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type {IUser} from "../../models/IUser.ts";
import {getAllUsers} from "../../services/api.service.ts";
import UserComponent from "../user/UserComponent.tsx";

const Some = () => {

    const [users, setUsers] = useState<IUser[]>([]);

    const [query] = useSearchParams();

    useEffect(() => {
        let pg = query.get('pg');
        if (pg){
            getAllUsers(pg)
                .then(users => setUsers(users.data))
        }
    }, [query]);

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} users={value}/>)
            }
        </div>
    );
};

export default Some;