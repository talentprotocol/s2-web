import styled from "styled-components";
import Image from "next/image";
import { GradientType, Props } from "./types";

const POSITIONS: { [key: string]: any } = {
  [GradientType.RIGHT]: `
    transform: translate(30%, -20%);
    
    @media (max-width: 768px) {
      transform: translate(0, 100%) scale(2, 3.5);
    }
   `,
  [GradientType.LEFT]: `
    transform: translate(-38%, -30%);
    
    @media (max-width: 768px) {
      transform: translate(0%, 65%) scale(2, 2);
    }
   `,
  [GradientType.BOTTOM]: `
    transform: translate(35%, -20%);
    
    @media (max-width: 768px) {
      transform: translate(0%, 65%) scale(2.5, 1.8);
    }
   `,
  [GradientType.SIDEBAR]: `
    @media (max-width: 768px) {
      transform: translate(-40%, 45%) scale(2, 2.2);
    }
   `,
  [GradientType.DEFAULT]: `
    transform: translate(-40%, -20%);
    
    @media (max-width: 768px) {
      transform: translate(-40%, 35%) scale(2, 2.2);
    }
  `,
};

export const Container = styled.div<Props>`
  position: absolute;
  height: 764px;
  z-index: -20;
  ${({ type }) => POSITIONS[type]}
`;

export const RelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const StyledImage = styled(Image)``;
