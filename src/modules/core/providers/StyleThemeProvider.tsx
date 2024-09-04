'use client';
import React from 'react';

import { ThemeProvider } from 'styled-components';

import { theme } from '@/theme';
import GlobalStyles from '@/theme/GlobalStyles';

type Props = {
  children: React.ReactNode;
};

const StyleThemeProvider = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default StyleThemeProvider;
