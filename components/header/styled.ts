import styled from "styled-components";
import { COLORS } from "../../atomic/_static/color-palette";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 22px 24px;
`;

export const LogoArea = styled.div`
  flex-grow: 1;
`;

export const ActionArea = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenu = styled.button`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  background: none;
  border: none;
  outline: none;

  &:before {
    display: block;
    width: 18px;
    border-radius: 4px;
    height: 2px;
    background: ${COLORS.WHITE};
    content: "";
  }

  &:after {
    display: block;
    width: 18px;
    border-radius: 4px;
    height: 2px;
    margin-top: 8px;
    background: ${COLORS.WHITE};
    content: "";
  }
`;
