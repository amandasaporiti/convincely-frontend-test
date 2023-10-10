import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --base-white: #FFFF;
    --gray-200: #ABBBCC;
    --gray-300: #C5D2E0;
    --gray-400: #D8E1EB;
    --gray-600: #F5F7FA;

    --charcoal: #0C1932;
    --charcoal-10: #0C19321A;
    --charcoal-60: #0C193299;
    --charcoal-80: #0C1932CC;

    --purple-primary: #4C16C9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: var(--base-white);
    color: var(--charcoal);
  }

  body, button, textarea, input {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }

`
