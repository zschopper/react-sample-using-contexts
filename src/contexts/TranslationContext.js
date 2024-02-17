import React, { createContext, useContext, useState } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
    const [language, setLanguage] = useState('en');

    const languages = {
        "en": "English",
        "hu": "Hungarian",
    }
    const translations = {
        'hu': {
            'Context API Sample app with user, translation, and theme handling': 'Context API példa alkalmazás felhasználó-, fordítás és témakezeléssel',
            'Welcome :name!': 'Üdvözöllek, :name!',
            'Please log in.': 'Kérlek jelentkezz be.',
            'Login': 'Belépés',
            'Logout': 'Kilépés',
            'Change language to :lang': 'Váltás :lang nyelvre',
            'Toggle Theme': 'Téma váltása',
            'English': 'angol',
            'Hungarian': 'magyar',
        }
    };

    function changeLanguage(newLang) {
        if (newLang === "en" || translations[newLang]) {
            setLanguage(newLang);
        }
    }

    function __(text, replace = {}) {
        if (language !== 'en') {
            text = translations[language][text] ?? text
        }
        if (replace) {
            return Object.keys(replace).reduce((carry, current) => carry.replace(new RegExp(`:${current}\\b`, 'g'), replace[current]), text);
        } else {
            return text;
        }
    }

    return (
        <TranslationContext.Provider value={{ language, languages, __, changeLanguage }}>
            {children}
        </TranslationContext.Provider>
    );
};

export const useTranslation = () => useContext(TranslationContext);
