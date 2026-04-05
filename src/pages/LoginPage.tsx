import {useEffect} from "react";
import {login} from "../services/service.api.ts";

const LoginPage = () => {

    useEffect(() => {
        login({
            username: 'emilys',
            password: 'emilyspass',
            expireInMins: 1
        });
    }, []);

    return (
        <div>
            Login page
        </div>
    );
};

export default LoginPage;