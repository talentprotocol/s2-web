import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";

export const StyledDescription = styled.p`
  margin: 0;
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.LIGHT_GREY};

  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 165%;
  }
`;
