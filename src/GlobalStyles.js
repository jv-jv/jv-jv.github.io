import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
*,
*::before, 
*::after {
    box-sizing: border-box;
}

:root {

    // COLORS

    --clr-primary: #333;
    --clr-action: #0083ff;


    --clr-bg-error: #fff0f4;
    --clr-error: #c51244;

    --clr-bg-body:#d6dfff;
  
    
    --clr-bg: #f5f7ff;
    --clr-bg-sidebar: #ebeefc;
    --clr-bg-post: #dcebff;

    // ??
    --clr-light: #fff;
    --clr-bg-header: #1d173b;
    --clr-text-light: #ffffffd1;

    /* --clr-bg-body:#c4d0ff; */


    /* --clr-post: #0083ff; */



    // RADIUS
    --radius-small: 1rem;

    --radius-large: 2.5rem;
  

}

body {
    margin:0;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: var(--clr-bg-body);
    color: var(--clr-primary);


}

/* #root {
    display: grid;
    grid-template-columns: 1em minmax(700px, 2fr) 1em;

} */

`

export default GlobalStyles
