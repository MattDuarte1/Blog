import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    text-decoration: none;
    list-style: none;
  }

  a {
    color: ${({ theme }) => theme.colors.black};
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }


  body {
    position: relative;
    width: 100%;
    height: 100%;
    font-size: 1.6rem;
    font-family: ${({ theme }) => theme.font.family.default};
    color: ${({ theme }) => theme.colors.black};
    background-image: url('/assets/dotgrid.svg');
    background-size: cover;
  }

`;
