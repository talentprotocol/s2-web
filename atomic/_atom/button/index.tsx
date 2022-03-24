import { useMemo } from "react";
import { StyledButton, ChildrenContainer } from "./styled";
import { Props, Variant } from "./types";

const Button = ({
  content,
  children,
  className,
  variant = Variant.PRIMARY,
}: Props) => {
  const renderedChildren = useMemo(
    () =>
      children && <ChildrenContainer>{children}</ChildrenContainer>,
    [children]
  );
  return (
    <StyledButton variant={variant} className={className}>
      {renderedChildren}
      {content}
    </StyledButton>
  );
};

export default Button;
