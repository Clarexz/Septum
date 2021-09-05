import React, { createContext, useState } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = (props) => {

    const [ darkMode, setDarkMode ] = useState(false);

    const cambiarModo = e => {
        e.preventDefault();

        

        if( darkMode === false ) {
            window.localStorage.removeItem('themeLight');
            window.localStorage.setItem('themeDark', 'dark')
            setDarkMode(!darkMode); 
        } else {
            window.localStorage.removeItem('themeDark');
            window.localStorage.setItem('themeLight', 'light');
            setDarkMode(!darkMode); 
        }
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