import React from 'react';
import GlobalStyle from '../theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/MainTheme.js';

const MainTemplate = ({ children }) => (
  <div>
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <GlobalStyle />
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </div>
);

export default MainTemplate;
