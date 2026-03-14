import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    greenBackground: '#d6fbe9',
    blueBackground: '#e7ecff',
    pinkBackground: '#fce8f3',

    cardImage: '#f6f7f9',
    cardId: '#777',
    skeleton: '#ddd',

    white: '#fff',
    black: '#000',

    textPrimary: '#111827',

    stateLineBack: '#e5e7eb',
    stateLineFront: '#111',
  },

  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
  },

  breakpoints: {
    mobile: '480px',
    mobileLg: '624px',
    tablet: '768px',
    desktop: '1024px',
  },
};

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: relative;
  }

  body {
    margin: 0;
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif;

    color: ${theme.colors.textPrimary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    display: flex;
    flex-direction: column;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%
  }
  
  .main-content {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    padding: 36px 16px 16px;
    background-color: ${theme.colors.greenBackground};
    &.infinite-scroll, &.load-more {
      background-color: ${theme.colors.blueBackground};
    }
    &.view {
      background-color: ${theme.colors.pinkBackground};
    }
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    font-weight: 600;
  }

  p {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in-out
  }

  button {
    font-family: inherit;
    transition: all 0.3s ease-in-out
  }

  img {
    max-width: 100%;
    height: auto;
    display: inline-block
  }
`;

export const Main = styled.main`
  flex: 1 0 auto;
  max-width: 1200px;
  margin: auto;
  width: 100%;
`;
