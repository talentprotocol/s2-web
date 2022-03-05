import styled from "styled-components";
import Image from "next/image";
import { fontDefault } from "atomic/_static/typography";
import { COLORS } from "atomic/_static/color-palette";

export const HorizontalContainer = styled.div`
  padding: 0 0 64px;
  margin: 40px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;

  @media (max-width: 768px) {
    gap: 24px;
    flex-direction: column;
  }
`;

export const FooterLabel = styled.h3`
  padding: 0;
  white-space: nowrap;
  margin: 0;
  color: ${COLORS.GREY};
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const ImageContainer = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
`;

export const StyledImage = styled(Image)``;
