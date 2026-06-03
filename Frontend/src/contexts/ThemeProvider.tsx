import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeContext, type ThemeMode } from './ThemeContext';
import { darkTheme, lightTheme, type AppTheme } from '../styles/theme';

interface ThemeModeProviderProps {
  children: ReactNode;
}

export default function ThemeModeProvider({ children }: ThemeModeProviderProps) {
  const [theme, setTheme] = useState<ThemeMode>(() => {
    const savedTheme = localStorage.getItem('acta-theme') as ThemeMode | null;
    return savedTheme || 'light';
  });

  useEffect(() => {
    localStorage.setItem('acta-theme', theme);
    const root = document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const selectedTheme: AppTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value = {{ theme, toggleTheme }}>
      <StyledThemeProvider theme = {selectedTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}