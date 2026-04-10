import UserComponent from "./UserComponent.tsx";
import {useEffect, useState} from "react";

const UsersComponent = () => {

    const [users, setUsers] = useState([])
    
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
            <UserComponent/>
        </div>
    );
};

export default UsersComponent;