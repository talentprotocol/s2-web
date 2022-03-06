import styled from "styled-components";
import Image from "next/image";
import { COLORS } from "atomic/_static/color-palette";
import { fontDefault } from "atomic/_static/typography";

export const Container = styled.footer`
  margin: 64px 0 0;
  padding: 24px 24px;

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: auto;
  }
`;

export const LineBreak = styled.hr`
  border-color: ${COLORS.DARK_GREY};
`;

export const ColumnContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;

    * {
      flex-grow: 1;
    }
  }
`;

export const AlignmentContainer = styled.div`
  margin-bottom: 40px;
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const InfoContainer = styled.div`
  margin: 40px 0 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    margin: 56px 0 0;
  }
`;

export const LogoContainer = styled.div``;

export const Label = styled.span`
  display: block;
  margin: 8px 0 0;
  font-family: ${fontDefault};
  color: ${COLORS.LIGHT_GREY};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
`;

export const ListsContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.span`
  display: block;
  margin-top: 40px;
  font-family: ${fontDefault};
  color: ${COLORS.WHITE};
  letter-spacing: 0.02em;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 165%;
`;

export const LinkList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const LinkListItem = styled.li`
  margin-top: 8px;
`;

export const StyledLink = styled.a`
  font-family: ${fontDefault};
  color: ${COLORS.LIGHT_GREY};
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 165%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: ${COLORS.WHITE};
    transition: color 0.3s ease;
  }
`;

export const BottomFooterContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
  }
`;

export const Copyright = styled.span`
  display: block;
  margin: 40px 0 0;
  font-family: ${fontDefault};
  color: ${COLORS.LIGHT_GREY};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
`;

export const LogosArea = styled.div`
  margin: 32px 0 40px;
  font-family: ${fontDefault};
  color: ${COLORS.WHITE};
  display: flex;
  gap: 32px;

  @media (min-width: 768px) {
    flex-grow: 1;
    justify-content: flex-end;
  }
`;

export const ExternalLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled(Image)`
  transition-duration: 0.3s;

  :hover {
    filter: brightness(0) invert(1);
  }
`;
