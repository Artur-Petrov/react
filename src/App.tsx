import './App.css'
import {MyContextProvider} from "./context/MyContext.tsx";
import A from "./components/A.tsx";
import B from "./components/B.tsx";
import {useState} from "react";

function App() {

    const [themeColor, setThemeColor] = useState<string>('light')
    
    return (
        <div>

            <MyContextProvider.Provider value={{
                theme: themeColor,
                changeTheme:(themeValue: string)=>{
                    setThemeColor(themeValue)
                }
            }}>
                <A/>
                <B/>
            </MyContextProvider.Provider>

        </div>
    );
}

export default App
