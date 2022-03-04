import styled from "styled-components";
import Image from "next/image";
import { Props } from "./types";

export const Container = styled.div<Props>`
  position: absolute;
  width: 800px;
  animation: move 18s infinite;
  z-index: 10;

  @keyframes move {
    0% {
      transform: translate(0, 0) scale(1, 1) rotate(0deg);
    }
    50% {
      transform: translate(-80%, -50%) scale(1.6, 1.8) rotate(270deg);
    }
    100% {
      transform: translate(0, 0) scale(1, 1) rotate(0deg);
    }
  }
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)``;

/*

  ${({ type }) => {
    switch (type) {
      case GradientType.CENTER:
        return `
            top: 50%;
            left: 50%;
            transform: translate(-65%, -65%);
          `;
      case GradientType.REVERSE_LEFT:
        return `
            left: 50%;
            top: 50%;
            transform: translate(-60%, -60%) scale(1, -1);
          `;
      case GradientType.BOTTOM:
        return `
            left: 50%;
            top: 50%;
            transform: translate(-50%, -25%) rotate(-30deg);
          `;
      default:
        return `
          left: 0;
          transform: translate(-42%, -25%);
        `;
    }
  }}

 */
