import './App.css'
import {useEffect} from "react";
import {getAllUsers, saveUser} from "./service/user.service.ts";

function App() {

    useEffect(() => {
        getAllUsers()
            .then(value => console.log(value));

        saveUser({id: 1, name: "John", email: "john@gmail.com"})
            .then(user => console.log(user));
    }, []);

    return (
        <></>

    )
}

export default App
