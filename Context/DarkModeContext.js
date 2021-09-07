import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext();

const DarkModeProvider = (props) => {

    const [ darkMode, setDarkMode ] = useState(false);
    
    () => {
        window.localStorage.setItem('themeLight', 'Light');
    } 

    const cambiarModo = e => {
        e.preventDefault();

        if(darkMode === false) {
            window.localStorage.removeItem('themeLight');
            window.localStorage.setItem('themeDark', 'Dark');
        } else {
            window.localStorage.removeItem('themeDark');
            window.localStorage.setItem('themeLight', 'Light');
        }

        setDarkMode(!darkMode); 
    };

    useEffect(() => { 
        if(window.localStorage.getItem('themeDark')) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }
    }, [])
    
    

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