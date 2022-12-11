import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --background: #FEFAE0;
    --gold: #FFD28F;
    --white: #FFFFFF;
    --gray: #929292;
    --green: #283618;
    --soft-green: #606C38;
    --brown: #2F2105;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #__next {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;

    background: var(--background);
    color: var(--brown);
  }

  body {
    font-family: Poppins, sans-serif;
  }

  .leaflet-control-attribution {
    display: none;
  }

  .leaflet-popup {
    bottom: 20px !important;
    left: -38px !important;
  }

  .leaflet-popup-tip-container {
    left: 15%;
  }

  .leaflet-container {
    color: var(--gray) !important;
  }
`

export default GlobalStyles
