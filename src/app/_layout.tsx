import '@/global.css';

import { DarkTheme, DefaultTheme, Slot, ThemeProvider } from 'expo-router';

import { useColorScheme } from '@/shared/hooks/use-color-scheme';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Slot />
    </ThemeProvider>
  );
}
