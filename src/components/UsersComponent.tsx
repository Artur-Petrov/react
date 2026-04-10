import UserComponent from "./UserComponent.tsx";
import {useCallback, useEffect, useState} from "react";

const UsersComponent = () => {

    const [users, setUsers] = useState([])

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
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;