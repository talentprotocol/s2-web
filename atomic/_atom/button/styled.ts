import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";
import { Variant } from "./types";

const buildButton = (variant: Variant) =>
  variant === Variant.PRIMARY
    ? `
  padding: 12px 0px;
  background: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};
  
  &:hover {
    background-color: ${COLORS.LIGHT_PURPLE};
    transition: background-color 0.3s ease;
  }
  `
    : `
  padding: 11px 0px;
  background: transparent;
  color: ${COLORS.PURPLE};
  border: 1px solid ${COLORS.PURPLE};
  
  &:hover {
    background-color: ${COLORS.PURPLE};
    color: ${COLORS.WHITE};
    transition: background-color 0.3s ease, color 0.3s ease;
  }`;

export const StyledButton = styled.button<{ variant: Variant }>`
  border: none;
  ${({ variant }) => buildButton(variant)}
  font-family: ${fontDefault};
  outline: none;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 165%;
  border-radius: 4px;
  display: inline-flex;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (min-width: 768px) {
    padding-right: 32px;
    padding-left: 32px;
  }
`;

export const ChildrenContainer = styled.span`
  margin: auto 14px auto 0;
  display: inline-flex;
  align-items: center;
`;
