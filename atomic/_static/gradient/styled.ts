import styled from "styled-components";
import Image from "next/image";
import { GradientType, Props } from "./types";

const POSITIONS: { [key: string]: any } = {
  [GradientType.RIGHT]: `
    transform: translate(30%, -20%);
   `,
  [GradientType.LEFT]: `
    transform: translate(-38%, -30%);
   `,
  [GradientType.BOTTOM]: `
    transform: translate(35%, -20%);
   `,
  [GradientType.DEFAULT]: `
    transform: translate(-40%, -20%);
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
