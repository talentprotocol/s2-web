import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";
import { Type } from "./types";

const buildButton = (type: Type) =>
  type === Type.PRIMARY
    ? `
  padding: 12px 32px;
  background: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};
  `
    : `
  padding: 11px 31px;
  background: ${COLORS.BLACK};
  color: ${COLORS.PURPLE};
  border: 1px solid ${COLORS.PURPLE};`;

export const StyledButton = styled.a<{ type: Type }>`
  border: none;
  ${({ type }) => buildButton(type)}
  font-family: ${fontDefault};
  outline: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 165%;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
`;

export const ChildrenContainer = styled.span`
  margin: auto 14px auto 0;
  display: inline-flex;
  align-items: center;
`;
