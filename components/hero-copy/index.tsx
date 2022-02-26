import {useMemo} from "react";
import { Container } from "./styled";
import { Type as SubTitleType } from "atomic/_atom/subTitle/types";
import SubTitle from "atomic/_atom/subTitle";
import Title from "atomic/_atom/title";
import Description from "atomic/_atom/description";

interface Props {
  subTitle?: {
    content: string;
    type: SubTitleType;
  };
  title?: string;
  description?: string;
}

const HeroCopy = ({ subTitle, title, description }: Props) => {
  const memoizedSubTitle = useMemo(() => subTitle && (
      <SubTitle type={subTitle.type} content={subTitle.content}/>
  ), [subTitle]);
  const memoizedTitle = useMemo(() => title && (
      <Title content={title}/>
  ), [title]);
  const memoizedDescription = useMemo(() => description && (
      <Description content={description}/>
  ), [description]);
  return (
      <Container>
        {memoizedSubTitle}
        {memoizedTitle}
        {memoizedDescription}
      </Container>
  );
}

export default HeroCopy;
