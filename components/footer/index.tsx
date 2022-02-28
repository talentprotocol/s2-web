import { useMemo } from "react";
import ProfileSection from "../page-sections/profile-section";
import { useMediaQuery } from "utils/useMediaQuery";
import Logo from "atomic/_atom/logo";
import { LOGO_SIZE } from "atomic/_atom/logo/types";
import { FooterCopy as COPY } from "copy/footer";
import {
  Container,
  LineBreak,
  AlignmentContainer,
  ColumnContainer,
  LogoContainer,
  InfoContainer,
  Label,
  ListsContainer,
  ListTitle,
  LinkList,
  LinkListItem,
  StyledLink,
  Copyright,
  LogosArea,
} from "./styled";

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const projectList = useMemo(
    () =>
      COPY.projectList.links.map((link) => (
        <LinkListItem key={link.name}>
          <StyledLink>{link.name}</StyledLink>
        </LinkListItem>
      )),
    []
  );
  const helpList = useMemo(
    () =>
      COPY.helpList.links.map((link) => (
        <LinkListItem key={link.name}>
          <StyledLink>{link.name}</StyledLink>
        </LinkListItem>
      )),
    []
  );
  return (
    <Container>
      <LineBreak />
      <AlignmentContainer>
        <ColumnContainer>
          <InfoContainer>
            <LogoContainer>
              <Logo size={LOGO_SIZE.MEDIUM} />
            </LogoContainer>
            <Label>{COPY.label}</Label>
          </InfoContainer>
          <AlignmentContainer>
            <ListsContainer>
              <ListTitle>{COPY.projectList.title}</ListTitle>
              <LinkList>{projectList}</LinkList>
            </ListsContainer>
            <ListsContainer>
              <ListTitle>{COPY.helpList.title}</ListTitle>
              <LinkList>{helpList}</LinkList>
            </ListsContainer>
          </AlignmentContainer>
        </ColumnContainer>
        {!isMobile && <ProfileSection />}
      </AlignmentContainer>
      <LineBreak />
      <Copyright>{COPY.copyright}</Copyright>
      <LogosArea>TEMP - LOGOS</LogosArea>
    </Container>
  );
};

export default Footer;
