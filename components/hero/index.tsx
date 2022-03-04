import Gradient from "atomic/_static/gradient";
import { GradientType } from "atomic/_static/gradient/types";
import { Container } from "./styled";

interface Props {
  children: JSX.Element | JSX.Element[];
  gradientType?: GradientType;
}

const Hero = ({
  children,
  gradientType = GradientType.HIDDEN,
}: Props) => (
  <Container>
    <Gradient type={gradientType} />
    {children}
  </Container>
);

export default Hero;
