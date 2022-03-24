import styled from "styled-components";
import { COLORS } from "atomic/_static/color-palette";
import { fontDefault } from "../../atomic/_static/typography";

interface MobileMenuProps {
  isSidebarVisible: boolean;
}

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  padding: 22px 24px;
  z-index: 20;

  @media (min-width: 768px) {
    position: relative;
    height: 100px;
    margin: auto;
    padding: 0px 40px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const LogoArea = styled.div`
  flex-grow: 1;
`;

export const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MobileMenu = styled.button<MobileMenuProps>`
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
    transition-duration: 0.2s;
    ${({ isSidebarVisible }) =>
      isSidebarVisible &&
      `
        transform: translate(0, 5px) rotate(45deg);
    `}
  }

  &:after {
    display: block;
    width: 18px;
    border-radius: 4px;
    height: 2px;
    margin-top: 8px;
    background: ${COLORS.WHITE};
    content: "";
    transition-duration: 0.2s;
    ${({ isSidebarVisible }) =>
      isSidebarVisible &&
      `
        transform: translate(0, -5px) rotate(-45deg);
    `}
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LinkList = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const LinkListItem = styled.li`
  margin-left: 40px;
`;

export const StyledLink = styled.a`
  display: block;
  font-family: ${fontDefault};
  color: ${COLORS.LIGHT_GREY};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 165%;
  text-decoration: none;

  &:hover {
    color: ${COLORS.WHITE};
    cursor: pointer;
    transition: color 0.3s ease;
  }
`;

export const StyledButtonLink = styled.button`
  display: block;
  font-family: ${fontDefault};
  color: ${COLORS.LIGHT_GREY};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 165%;
  text-decoration: none;
  background-color: transparent;
  border: 0px;

  &:hover {
    color: ${COLORS.WHITE};
    cursor: pointer;
    transition: color 0.3s ease;
  }
`;
