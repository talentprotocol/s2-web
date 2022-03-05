import { useMemo } from "react";
import {
  Container,
  TitleContainer,
  DescriptionContainer,
  InfoContainer,
} from "./styled";
import { Type as SubTitleType } from "atomic/_atom/subTitle/types";
import SubTitle from "atomic/_atom/subTitle";
import Title from "atomic/_atom/title";
import Description from "atomic/_atom/description";

interface Props {
  subTitle?: {
    content: string;
    type: SubTitleType;
    isCentered?: boolean;
  };
  title?: string;
  isStretched?: boolean;
  description?: string;
  children?: JSX.Element | JSX.Element[];
}

const HeroCopy = ({
  subTitle,
  title,
  description,
  isStretched = false,
  children = [],
}: Props) => {
  const memoizedSubTitle = useMemo(
    () =>
      subTitle && (
        <SubTitle
          type={subTitle.type}
          content={subTitle.content}
          isCentered={subTitle.isCentered}
        />
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
    [title, subTitle]
  );
  const memoizedDescription = useMemo(
    () =>
      description && (
        <DescriptionContainer hasMargin={!!title}>
          <Description content={description} />
        </DescriptionContainer>
      ),
    [description, title]
  );
  return (
    <Container isStretched={isStretched}>
      <InfoContainer>
        {memoizedSubTitle}
        {memoizedTitle}
        {memoizedDescription}
        {children}
      </InfoContainer>
    </Container>
  );
};

export default HeroCopy;
