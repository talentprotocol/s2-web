import { StyledButton, ChildrenContainer } from "./styled";
import { useMemo } from "react";

interface Props {
  content: string;
  children?: JSX.Element | JSX.Element[];
}

const ButtonLink = ({ content, children }: Props) => {
  const renderedChildren = useMemo(
    () =>
      children && <ChildrenContainer>{children}</ChildrenContainer>,
    [children]
  );
  return (
    <StyledButton>
      {renderedChildren}
      {content}
    </StyledButton>
  );
};

export default ButtonLink;
