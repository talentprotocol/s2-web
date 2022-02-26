import { StyledSubTitle } from "./styled";
import { Type } from "./types";

interface Props {
  content: string;
  type: Type;
}

const SubTitle = ({ content, type }: Props) => (
  <StyledSubTitle type={type}>{content}</StyledSubTitle>
);

export default SubTitle;
