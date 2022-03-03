import { useMemo } from "react";
import { StyledButton, ChildrenContainer } from "./styled";
import { Props, Type } from "./types";

const ButtonLink = ({
  content,
  href,
  children,
  target,
  type = Type.PRIMARY,
}: Props) => {
  const renderedChildren = useMemo(
    () =>
      children && <ChildrenContainer>{children}</ChildrenContainer>,
    [children]
  );
  return (
    <StyledButton type={type} href={href} target={target}>
      {renderedChildren}
      {content}
    </StyledButton>
  );
};

export default ButtonLink;
