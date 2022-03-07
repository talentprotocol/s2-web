import styled from "styled-components";
import Image from "next/image";

export const Column = styled.div`
  padding: 0 0 64px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  margin: 40px 0 0;
  width: 540px;
  height: 362px;
  position: relative;

  @media (min-width: 768px) {
    width: 962px;
    height: 650px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;

  @media (max-width: 768px) {
    position: relative;
    height: 100%;
    width: 100%;
  }
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
