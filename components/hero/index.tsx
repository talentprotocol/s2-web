import { useRef } from "react";
import { useWasVisible } from "utils/useWasVisible";
import Gradient from "atomic/_static/gradient";
import { GradientType } from "atomic/_static/gradient/types";
import { Container } from "./styled";

interface Props {
  children: JSX.Element | JSX.Element[];
  className?: string;
  gradientType?: GradientType;
  isHidden?: boolean;
}

const Hero = ({
  children,
  gradientType = GradientType.HIDDEN,
  className = "",
  isHidden = false
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
    <Container ref={ref} className={wasVisible ? className : ""} isHidden={isHidden}>
      <Gradient type={gradientType} />
      {children}
    </Container>
  );
};

export default Hero;
