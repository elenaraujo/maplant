import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #e20e8d;
    --background: #030518;
    --white: #eeeeee;
    --gray: #929292;

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
    background: var(--background);
    color: var(--white);
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
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

  .leaflet-container, a {
    color: var(--gray) !important;
  }
`

export default GlobalStyles
