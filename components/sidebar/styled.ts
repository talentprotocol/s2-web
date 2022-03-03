import styled from "styled-components";
import { COLORS } from "atomic/_static/color-palette";
import { fontDefault } from "atomic/_static/typography";

export const Container = styled.section`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: calc(100% - 64px);
  bottom: 0;
  background: ${COLORS.BLACK};
  padding: 24px;
  display: flex;
  flex-direction: column;
`;

export const LinkList = styled.ul`
  margin-top: 8px;
  list-style-type: none;
  padding: 0;
`;

export const LinkListItem = styled.li`
  margin-top: 32px;
`;

export const StyledLink = styled.a`
  font-family: ${fontDefault};
  color: ${COLORS.WHITE};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 165%;
  text-decoration: none;
  cursor: pointer;
`;

export const ActionArea = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: flex-end;
  gap: 8px;

  * {
    flex-grow: 1;
  }
`;
