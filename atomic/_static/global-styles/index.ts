import { createGlobalStyle } from "styled-components";
import { COLORS } from "../color-palette";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    overflow-x: hidden;
  }
  
  body {
    background: ${COLORS.BLACK};
    box-sizing: border-box;
    width: 100%;
  }

  .css-1fzpoyk:nth-child(3) {
    opacity: 1 !important;
  }

  .css-1fzpoyk:nth-child(1) {
    opacity: 0 !important;
    transition: 0.5s;
  }

  .css-1fzpoyk:nth-child(5) {
    opacity: 0 !important;
    transition: 0.5s;
  }
`;

export default GlobalStyles;
