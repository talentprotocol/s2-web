import Logo from "atomic/_atom/logo";
import { LOGO_SIZE } from "atomic/_atom/logo/types";
import { FooterCopy as COPY } from "copy/footer";
import {
  Container,
  LineBreak,
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
import { useMemo } from "react";

const Footer = () => {
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
      <InfoContainer>
        <LogoContainer>
          <Logo size={LOGO_SIZE.MEDIUM} />
        </LogoContainer>
        <Label>{COPY.label}</Label>
      </InfoContainer>
      <ListsContainer>
        <ListTitle>{COPY.projectList.title}</ListTitle>
        <LinkList>{projectList}</LinkList>
      </ListsContainer>
      <ListsContainer>
        <ListTitle>{COPY.helpList.title}</ListTitle>
        <LinkList>{helpList}</LinkList>
      </ListsContainer>
      <LineBreak />
      <Copyright>{COPY.copyright}</Copyright>
      <LogosArea>TEMP - LOGOS</LogosArea>
    </Container>
  );
};

export default Footer;
