import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    &::after {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
    &::before {
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
    }
  }

  html {
    font-size: 62.5%;
    -webkit-text-size-adjust: 62.5%;
    -moz-text-size-adjust: 62.5%;
  }

  body {
    font-size: 1rem;
    background-color: #1b1b1b;
    overflow-x: hidden;
  }

  :root {
    --type-scale: 1.25;
    --base-size: 1.45rem;
    --height-scale: 1.2;
    --line-height: 2.1rem;
    --h5: var(--base-size);
    --parag: calc(var(--base-size) * var(--type-scale));
    --h4: calc(var(--parag) * var(--type-scale));
    --h3: calc(var(--h4) * var(--type-scale));
    --h2: calc(var(--h3) * var(--type-scale));
    --h1: calc(var(--h2) * var(--type-scale));
    --h5-Lheight: var(--line-height);
    --para-Lheight: calc(var(--line-height) * var(--height-scale));
    --h4-Lheight: calc(var(--para-Lheight) * var(--height-scale));
    --h3-Lheight: calc(var(--h4-Lheight) * var(--height-scale));
    --h2-Lheight: calc(var(--h3-Lheight) * var(--height-scale));
    --h1-Lheight: calc(var(--h2-Lheight) * var(--height-scale));
  }

  .h1 {
    font-size: var(--h1);
    line-height: var(--h1-Lheight);
  }
  
  .h2 {
    font-size: var(--h2);
    line-height: var(--h2-Lheight);
  }
  
  .h3 {
    font-size: var(--h3);
    line-height: var(--h3-Lheight);
  }
  
  .h4 {
    font-size: var(--h4);
    line-height: var(--h4-Lheight);
  }
  
  .h5 {
    font-size: var(--h5);
    line-height: var(--h5-Lheight);
  }
  
  .parag,
  a,
  button {
    font-size: var(--parag);
    line-height: var(--para-Lheight);
  }

  img, 
  button, 
  a, 
  span {
    display: inline-block;
  }
  
  button {
    padding: 1rem 1.5rem;
    border-radius: 0.4rem;
    border: 0.2rem solid #23d997;
    background: transparent;
    color: #fff;
    cursor: pointer;

    &:hover {
      background-color: #23d997;
    }
  }

  @media only screen and (max-width: 960px) {
    :root {
      --type-scale: 1.23;
      --base-size: 1.3rem;
      --height-scale: 1.14;
    }
  }

  @media only screen and (max-width: 600px) {
    :root {
      --base-size: 1.11rem;
      --type-scale: 1.27;
      --height-scale: 1.2;
      --line-height: 1.6rem;
    }
  }
`;

export default GlobalStyle;