import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const classList = document.documentElement.classList;

    if (theme === "dark") {
        classList.add("dark-theme");
        classList.remove("light-theme");
    } else {
        classList.remove("dark-theme");
        classList.add("light-theme");
    }

    console.log('theme', theme);

    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
