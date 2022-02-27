import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";

export const StyledButton = styled.a`
  padding: 12px 32px;
  outline: none;
  border: none;
  background: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 165%;
  border-radius: 4px;
  display: inline-flex;
`;

export const ChildrenContainer = styled.span`
  margin: auto 14px auto 0;
  display: inline-flex;
  align-items: center;
`;
