import { Fragment } from "react";
import gradientImage from "../images/gradient.svg";
import gradientImage2 from "../images/gradient2.svg";
import gradientImage3 from "../images/gradient3.svg";
import gradientImage4 from "../images/gradient4.svg";
import { Props, GradientType } from "./types";
import { Container, RelativeContainer, StyledImage } from "./styled";

const GradientMap = {
  [GradientType.DEFAULT]: gradientImage,
  [GradientType.RIGHT]: gradientImage2,
  [GradientType.LEFT]: gradientImage3,
  [GradientType.BOTTOM]: gradientImage4,
};

const Gradient = ({ type }: Props) =>
  type === GradientType.HIDDEN ? (
    <Fragment />
  ) : (
    <Container type={type}>
      <RelativeContainer>
        <StyledImage
          priority
          src={GradientMap[type]}
          alt="gradient"
        />
      </RelativeContainer>
    </Container>
  );

export default Gradient;
