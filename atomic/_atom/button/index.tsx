import { StyledButton } from "./styled";

interface Props {
  content: string;
}

const Button = ({ content }: Props) => (
  <StyledButton>{content}</StyledButton>
);

export default Button;
