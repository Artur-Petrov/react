import {useContext} from "react";
import {MyContextProvider} from "../context/MyContext.tsx";
import './AA.css'

const Aa = () => {

    const {theme} = useContext(MyContextProvider)
    
    return (
        <div className={theme}>
            Component AA, theme value - {theme}
        </div>
    );
};

export default Aa;