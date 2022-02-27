import styled from "styled-components";
import Image from "next/image";
import { Props } from "./types";

export const LogoTag = styled(Image).attrs<Props>(({ size }) => {
  return {
    width: size?.width,
    height: size?.height,
  };
})<Props>``;
