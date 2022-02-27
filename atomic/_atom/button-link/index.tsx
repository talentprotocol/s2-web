import { useMemo } from "react";
import { StyledButton, ChildrenContainer } from "./styled";
import { Props, Type } from "./types";

const ButtonLink = ({
  content,
  children,
  type = Type.PRIMARY,
}: Props) => {
  const renderedChildren = useMemo(
    () =>
      children && <ChildrenContainer>{children}</ChildrenContainer>,
    [children]
  );
  return (
    <StyledButton type={type}>
      {renderedChildren}
      {content}
    </StyledButton>
  );
};

export default ButtonLink;
