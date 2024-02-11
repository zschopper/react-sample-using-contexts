import React from 'react';
import { useTranslation } from '../contexts/TranslationContext';
import { useUser } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContext';

const MainPage = () => {
  const { language, languages, _, changeLanguage } = useTranslation();
  const { user, login, logout } = useUser() || {};
  const { toggleTheme } = useTheme();
  return (
    <>
      <h1>{_('Context API Sample app with user, translation, and theme handling')}</h1>
      {Object.keys(languages).map((e, i) => { return e !== language && <button key={i} onClick={() => { changeLanguage(e) }}>{_('Change language to :lang', { lang: _(languages[e]) })}</button> })}
      <button onClick={user ? logout : () => login({ 'username': 'Joe', 'age': 12, 'gender': _('male') })}>{user ? _('Logout') : _('Login')}</button>
      <button onClick={toggleTheme}>{_('Toggle Theme')}</button>
      <div>
        <p>{user ? _('Welcome :name!', { 'name': user.username }) : _('Please log in.')}</p>
      </div>
    </>
  );
};

export default MainPage;

