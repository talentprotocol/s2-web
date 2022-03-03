import styled from "styled-components";
import Image from "next/image";
import { fontDefault } from "atomic/_static/typography";
import { COLORS } from "atomic/_static/color-palette";

export const HorizontalContainer = styled.div`
  margin: 40px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
`;

export const FooterLabel = styled.h3`
  padding: 0;
  color: ${COLORS.GREY};
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  text-align: center;
`;

export const StyledImage = styled(Image)``;
