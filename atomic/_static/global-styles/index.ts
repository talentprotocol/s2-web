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
`;

export default GlobalStyles;
