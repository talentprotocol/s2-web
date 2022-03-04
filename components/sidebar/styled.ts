import styled from "styled-components";
import { COLORS } from "atomic/_static/color-palette";
import { fontDefault } from "atomic/_static/typography";

export const Container = styled.section`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  bottom: 0;
  background: ${COLORS.BLACK};
  padding: 88px 24px;
  display: flex;
  flex-direction: column;
  --animate-duration: 0.4s;
`;

export const LinkList = styled.ul`
  margin: 36px 0 0;
  list-style-type: none;
  padding: 0;
`;

export const LinkListItem = styled.li`
  margin-top: 24px;
`;

export const StyledLink = styled.a`
  font-family: ${fontDefault};
  color: ${COLORS.WHITE};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  letter-spacing: 0.02em;
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
