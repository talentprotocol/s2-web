import styled from "styled-components";
import { COLORS } from "atomic/_static/color-palette";

export const Container = styled.article`
  color: ${COLORS.WHITE};

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    max-width: 468px;
  }
`;

export const InfoContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div<{ hasMargin?: boolean }>`
  margin-top: ${({ hasMargin }) => (hasMargin ? 8 : 0)}px;
`;

export const DescriptionContainer = styled.div<{
  hasMargin?: boolean;
}>`
  margin-top: ${({ hasMargin }) => (hasMargin ? 16 : 0)}px;
`;
