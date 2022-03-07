import { useMemo } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "utils/useMediaQuery";
import Logo from "atomic/_atom/logo";
import twitterLogo from "atomic/_static/images/twitter.svg";
import discordLogo from "atomic/_static/images/discord.svg";
import telegramLogo from "atomic/_static/images/telegram.svg";
import githubLogo from "atomic/_static/images/github.svg";
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
  StyledImage,
  ExternalLink,
  BottomFooterContainer,
} from "./styled";

const DynamicProfileSectionNoSSR = dynamic(
  // @ts-ignore
  () => import("components/page-sections/profile-section"),
  { ssr: false }
);

const Footer = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const projectList = useMemo(
    () =>
      COPY.projectList.links.map((link) => (
        <LinkListItem key={link.name}>
          <StyledLink href={link.href} target="blank">
            {link.name}
          </StyledLink>
        </LinkListItem>
      )),
    []
  );
  const helpList = useMemo(
    () =>
      COPY.helpList.links.map((link) => (
        <LinkListItem key={link.name}>
          <StyledLink href={link.href} target="blank">
            {link.name}
          </StyledLink>
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
        {!isMobile && <DynamicProfileSectionNoSSR />}
      </AlignmentContainer>
      <LineBreak />
      <BottomFooterContainer>
        <Copyright>{COPY.copyright}</Copyright>
        <LogosArea>
          <ExternalLink
            href="https://twitter.com/talentprotocol"
            target="_blank"
          >
            <StyledImage
              src={twitterLogo}
              alt="twitter"
              title="twitter"
            />
          </ExternalLink>
          <ExternalLink
            href="https://discord.com/invite/talentprotocol"
            target="_blank"
          >
            <StyledImage
              src={discordLogo}
              alt="discord"
              title="discord"
            />
          </ExternalLink>
          <ExternalLink
            href="https://t.me/talentprotocol"
            target="_blank"
          >
            <StyledImage
              src={telegramLogo}
              alt="telegram"
              title="telegram"
            />
          </ExternalLink>
          <ExternalLink
            href="https://github.com/talentprotocol"
            target="_blank"
          >
            <StyledImage
              src={githubLogo}
              alt="github"
              title="github"
            />
          </ExternalLink>
        </LogosArea>
      </BottomFooterContainer>
    </Container>
  );
};

export default Footer;
