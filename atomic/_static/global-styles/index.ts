import { createGlobalStyle } from "styled-components";
import { COLORS } from "../color-palette";

const GlobalStyles = createGlobalStyle`
  body {
    background: ${COLORS.BLACK};
  }
`;

export default GlobalStyles;
