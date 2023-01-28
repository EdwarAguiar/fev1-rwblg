import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    /* font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
        
  ul, li, h1, h2, h3, p, button {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    /* background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    max-width: 500px;
    overscroll-behavior: none;
    width: 100%; */
    margin: 0 30px;
    font-family: "Poppins";
    background: #f1f1f1;

    @media all and (max-width: 500px) {
      margin: 0 10px;
      font-family: "Poppins";
      background: #f1f1f1;
    } 
  }

  #app {
    font-size: 1.2em;
    margin: 2px auto;
    width: 100%;
    max-width: 500px;
    box-sizing: border-box;

    @media all and (min-width: 1200px) {
      /* box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
      overflow-x: hidden;
      min-height: 100vh;
      padding-bottom: 10px; */
      font-size: 1.2em;
      margin: 10px auto;
      width: 100%;
      /* max-width: 1200px; Original value*/
      max-width: 1200px;
      padding-top: 0px;
      padding-bottom: 20px;
      padding-left: 20px;
      padding-right: 20px;
      box-sizing: border-box;
    }
  }
`
