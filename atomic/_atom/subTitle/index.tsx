import { StyledSubTitle } from "./styled";
import { Props } from "./types";

const SubTitle = ({ content, type, isCentered }: Props) => (
  <StyledSubTitle type={type} isCentered={isCentered}>
    {content}
  </StyledSubTitle>
);

export default SubTitle;
