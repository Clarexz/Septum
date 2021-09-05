import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = (props) => {

    const [ darkMode, setDarkMode ] = useState(false);

    const cambiarModo = e => {
        e.preventDefault();

        setDarkMode(!darkMode); 
    };
    

    return (
        <DarkModeContext.Provider
            value={{
                darkMode,
                setDarkMode,
                cambiarModo
            }}
        >
            {props.children}
        </DarkModeContext.Provider>
    )
}
export default DarkModeProvider;