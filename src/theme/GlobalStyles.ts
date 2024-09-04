'use client';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  * {
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: subpixel-antialiased;
    -moz-font-smoothing: subpixel-antialiased;
    box-sizing: border-box;
    text-rendering: optimizelegibility;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 22px;
    overflow-x: hidden;
    scrollbar-gutter: stable;
    background-color: ${theme.coreColor.bodyBgColor};
    height: 100vh;

    a {
      color: inherit;
      text-decoration: none;
      transition: 0.3s ease all;
    }
  }
`}
 `;
export default GlobalStyles;
