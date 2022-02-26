import styled from "styled-components";
import { COLORS } from "atomic/_static/color-palette";

export const Container = styled.article`
  color: ${COLORS.WHITE};
`;

export const TitleContainer = styled.div<{ hasMargin?: boolean }>`
  margin-top: ${({ hasMargin }) => (hasMargin ? 8 : 0)}px;
`;

export const DescriptionContainer = styled.div<{
  hasMargin?: boolean;
}>`
  margin-top: ${({ hasMargin }) => (hasMargin ? 16 : 0)}px;
`;
