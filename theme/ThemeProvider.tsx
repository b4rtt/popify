import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
  NavigationContainer,
  Theme as NavigationTheme,
} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from 'react';

import Colors from '@/constants/Colors';

type ThemeMode = 'light' | 'dark';

interface ThemeContextValue {
  mode: ThemeMode;
  colors: typeof Colors.light;
  toggleTheme: () => void;
}

const STORAGE_KEY = 'popify-theme-mode';

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function useAppTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useAppTheme must be used within ThemeProvider');
  }
  return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE_KEY)
      .then((storedMode) => {
        if (storedMode === 'dark' || storedMode === 'light') {
          setMode(storedMode);
        }
      })
      .finally(() => setIsHydrated(true));
  }, []);

  useEffect(() => {
    if (isHydrated) {
      AsyncStorage.setItem(STORAGE_KEY, mode).catch(() => undefined);
    }
  }, [isHydrated, mode]);

  const value = useMemo<ThemeContextValue>(
    () => ({
      mode,
      colors: mode === 'light' ? Colors.light : Colors.dark,
      toggleTheme: () => setMode((prev) => (prev === 'light' ? 'dark' : 'light')),
    }),
    [mode],
  );

  if (!isHydrated) {
    return null;
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function ThemedNavigationContainer({ children }: ThemeProviderProps) {
  const { mode, colors } = useAppTheme();

  const navigationTheme: NavigationTheme = useMemo(() => {
    const baseTheme = mode === 'dark' ? NavigationDarkTheme : NavigationDefaultTheme;
    return {
      ...baseTheme,
      dark: mode === 'dark',
      colors: {
        ...baseTheme.colors,
        background: colors.background,
        border: colors.border,
        card: colors.card,
        notification: Colors.primary,
        primary: Colors.primary,
        text: colors.text,
      },
    };
  }, [colors, mode]);

  return <NavigationContainer theme={navigationTheme}>{children}</NavigationContainer>;
}
