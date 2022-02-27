import styled from "styled-components";
import Image from "next/image";

export const ContentContainer = styled.div`
  margin: 56px 0 0;
  width: 540px;
  height: 362px;
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translate(12%, 0);
`;

export const ImageRelativeContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const StyledImage = styled(Image).attrs(() => ({
  layout: "fill",
  objectFit: "cover",
  objectPosition: "left top",
}))``;
