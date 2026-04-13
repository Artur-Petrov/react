import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";

const UsersComponent = () => {

    const [users, setUsers] = useState([])

    const arr: number[] = useMemo(()=>{
    return [11, 22, 33]
    }, []);

    const foo= useCallback(()=>{
        console.log('test')
    }, [])
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((value) => {
                setUsers(value);
            });
    }, []);

    return (
        <div>
            Users Component
            <UserComponent foo={foo} arr={arr} />
        </div>
    );
};

export default UsersComponent;