import {useContext} from "react";
import {MyContextProvider} from "../context/MyContext.tsx";

const BA = () => {

    const {changeTheme} = useContext(MyContextProvider);
    
    const handlerDark = () => {
        changeTheme('dark');
    };
    const handlerLight = () => {
        changeTheme('light');
    };
    return (
        <div>
            BA

            <div>
                <button onClick={handlerDark}>change theme to dark</button>
                <button onClick={handlerLight}>change theme to light</button>
            </div>
        </div>
    );
};

export default BA;