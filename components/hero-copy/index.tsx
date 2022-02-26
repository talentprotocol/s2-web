import { useMemo } from "react";
import {
  Container,
  TitleContainer,
  DescriptionContainer,
} from "./styled";
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
  children?: JSX.Element | JSX.Element[];
}

const HeroCopy = ({
  subTitle,
  title,
  description,
  children = [],
}: Props) => {
  const memoizedSubTitle = useMemo(
    () =>
      subTitle && (
        <SubTitle type={subTitle.type} content={subTitle.content} />
      ),
    [subTitle]
  );
  const memoizedTitle = useMemo(
    () =>
      title && (
        <TitleContainer hasMargin={!!subTitle}>
          <Title content={title} />
        </TitleContainer>
      ),
    [title]
  );
  const memoizedDescription = useMemo(
    () =>
      description && (
        <DescriptionContainer hasMargin={!!title}>
          <Description content={description} />
        </DescriptionContainer>
      ),
    [description]
  );
  return (
    <Container>
      {memoizedSubTitle}
      {memoizedTitle}
      {memoizedDescription}
      {children}
    </Container>
  );
};

export default HeroCopy;
