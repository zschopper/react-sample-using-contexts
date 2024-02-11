import './App.css';
import MainPage from './components/MainPage.js';
import { ThemeProvider } from './contexts/ThemeContext.js';
import { TranslationProvider } from './contexts/TranslationContext.js';
import { UserProvider } from './contexts/UserContext.js';

function App() {
  return (
    <TranslationProvider>
      <UserProvider>
        <ThemeProvider>
          <MainPage />
        </ThemeProvider>
      </UserProvider>
    </TranslationProvider>);
}

export default App;
