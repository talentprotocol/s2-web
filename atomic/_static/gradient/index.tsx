import { Fragment } from "react";
import gradientImage from "../images/gradient.svg";
import { Props, GradientType } from "./types";
import { Container, RelativeContainer, StyledImage } from "./styled";

const Gradient = ({ type }: Props) =>
  type === GradientType.HIDDEN ? (
    <Fragment />
  ) : (
    <Container type={type}>
      <RelativeContainer>
        <StyledImage priority src={gradientImage} alt="gradient" />
      </RelativeContainer>
    </Container>
  );

export default Gradient;
