import { createContext, useState } from "react";

export const DarkModeContext = createContext(undefined);


export const DarkModeProvider = ({children}) => {
 const [darkMode, setDarkMode] = useState(false);

 const toggleDarkMode = () =>{
    setDarkMode (prevMode => !prevMode)
 }

 return(
    <DarkModeContext.Provider value ={{ darkMode, toggleDarkMode }}>
        {children}
    </DarkModeContext.Provider>
 )
}

