'use client';
import GlobalStyle from '../styles/global';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

export default function ThemesProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}
