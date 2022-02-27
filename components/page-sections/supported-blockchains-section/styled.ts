import styled from "styled-components";
import { fontDefault } from "atomic/_static/typography";
import { COLORS } from "atomic/_static/color-palette";

export const FooterLabel = styled.h3`
  margin: 30px 0 0;
  padding: 0;
  color: ${COLORS.GREY};
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
`;
