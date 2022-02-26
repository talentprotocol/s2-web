import { Container } from "./styled";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Hero = ({ children }: Props) => (
  <Container>{children}</Container>
);

export default Hero;
