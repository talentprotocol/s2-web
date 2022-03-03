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
  
  .css-1fzpoyk {
    opacity: 1 !important;
    box-shadow: 0 0 12px ${COLORS.BLACK};
  }
`;

export default GlobalStyles;
