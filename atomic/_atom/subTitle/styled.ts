import styled from "styled-components";
import { Type } from "./types";
import { COLORS } from "../../_static/color-palette";

export const StyledSubTitle = styled.h3<{ type: Type }>`
  margin: 0;
  font-family: Plus Jakarta Sans, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 185%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  ${({ type }) =>
    type === Type.PRIMARY
      ? `color: ${COLORS.GREY};`
      : `color: ${COLORS.PURPLE};`}
`;
