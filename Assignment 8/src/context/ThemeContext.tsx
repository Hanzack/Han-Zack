import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Theme } from '../types';
import { useAsyncStorage } from '../hooks/useAsyncStorage';

const lightTheme: Theme = {
  isDark: false,
  colors: {
    primary: '#007AFF',
    secondary: '#5856D6',
    background: '#FFFFFF',
    surface: '#F2F2F7',
    text: '#000000',
    error: '#FF3B30',
    success: '#34C759',
    warning: '#FF9500',
  },
};

const darkTheme: Theme = {
  isDark: true,
  colors: {
    primary: '#0A84FF',
    secondary: '#5E5CE6',
    background: '#000000',
    surface: '#1C1C1E',
    text: '#FFFFFF',
    error: '#FF453A',
    success: '#30D158',
    warning: '#FF9F0A',
  },
};

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { data: isDark, setData: setIsDark } = useAsyncStorage<boolean>('isDarkMode', false);
  const [theme, setTheme] = useState<Theme>(lightTheme);

  useEffect(() => {
    setTheme(isDark ? darkTheme : lightTheme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};