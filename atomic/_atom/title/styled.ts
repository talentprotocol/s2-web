import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";

export const StyledTitle = styled.h1`
  margin: 0;
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 120%;
  color: ${COLORS.WHITE};

  @media (max-width: 768px) {
    font-size: 25px;
  }
`;
