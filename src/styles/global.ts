import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.color.green};
  }

  body {
    background-color: ${(props) => props.theme.color.grey1};
    color: ${(props) => props.theme.color.grey6};
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.color.grey7};
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    font-weight: 400;
    font-size: 1rem;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
`
