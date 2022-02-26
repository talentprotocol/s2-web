import { StyledTitle } from "./styled";

interface Props {
  content: string;
}

const Title = ({ content }: Props) => (
  <StyledTitle>{content}</StyledTitle>
);

export default Title;
