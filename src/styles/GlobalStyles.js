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
    width: 100%; 
    margin: 0 30px;*/

    /* Mobile Version */
  @media all and (max-width: 500px) {
    font-family: "Poppins";
    background: #f1f1f1;
    width: 100%;
    min-width: 375px;
    max-width: 500px;
    margin: 0px auto;
    /* overscroll-behavior: none; */
    
    /* display: flex;
    justify-content: center;
    align-items: center;         <-- No en Mobile
    flex-direction: column; */
   }

   /* Desktop Version */
  @media all and (min-width: 501px) {
    font-family: "Poppins";
    background: #f1f1f1;
    width: 100%;
    min-width: 500px;
    max-width: 1200px;
    margin: 0px auto;
    overscroll-behavior: none;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }  
  }

  #app {
  /* Mobile Version */
  @media all and (max-width: 500px) {
    font-size: 1.2em;
    margin: 0px auto;
    width: 100%;
    min-width: 375px;
    max-width: 500px;
    box-sizing: border-box;

    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }

  @media all and (min-width: 500px) {
    font-size: 1.2em;
    margin: 0px auto;
    width: 100%;
    min-width: 400px;
    max-width: 1200px;
    box-sizing: border-box;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

}
`
