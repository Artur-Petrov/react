import {useEffect} from "react";
import {loadAuthProducts} from "../services/service.api.ts";

const AuthResourcesPage = () => {

    useEffect(() => {
        loadAuthProducts().then(products => {
            console.log(products);
        })
    }, []);

    return (
        <div>
            Auth Resource Page
        </div>
    );
};

export default AuthResourcesPage;