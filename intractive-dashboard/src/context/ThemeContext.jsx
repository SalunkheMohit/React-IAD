import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children}) => {
    const [ dark, setdark ] = useState(false);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    },[dark]);

    return(
        <ThemeContext.Provider value={{dark, setdark}}>
           {children} 
        </ThemeContext.Provider>
    );
};