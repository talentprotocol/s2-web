import styled from "styled-components";
import { StyledProps, Type } from "./types";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";

export const StyledSubTitle = styled.h3<StyledProps>`
  margin: 0;
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 185%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  ${({ type }) =>
    type === Type.PRIMARY
      ? `color: ${COLORS.GREY};`
      : `color: ${COLORS.PURPLE};`}
  ${({ isCentered }) => isCentered && `text-align: center;`}
  @media(max-width: 768px) {
    font-size: 12px;
  }
`;
