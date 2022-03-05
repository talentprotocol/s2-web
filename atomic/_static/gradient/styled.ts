import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { GradientType, Props } from "./types";

const ANIMATIONS: { [key: string]: any } = {
  [GradientType.RIGHT]: keyframes`
    0% {
      transform: translate(10%, -20%) scale(-1.8, -1.6) rotate(45deg);
    }
    50% {
      transform: translate(40%, 30%) scale(-1.2, -1.8) rotate(80deg);
    }
    100% {
      transform: translate(10%, -20%) scale(-1.8, -1.6) rotate(45deg);
    }
`,
  [GradientType.DEFAULT]: keyframes`
    0% {
      transform: translate(-20%, -10%) scale(0.8, 0.9) rotate(0deg);
    }
    50% {
      transform: translate(-50%, -40%) scale(2.2, 2.4) rotate(-60deg);
    }
    100% {
      transform: translate(-20%, -10%) scale(0.8, 0.9) rotate(0deg);
    }
`,
};

export const Container = styled.div<Props>`
  position: absolute;
  width: 800px;
  animation: ${({ type }) => ANIMATIONS[type]} 18s infinite;
  z-index: -20;
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)``;
