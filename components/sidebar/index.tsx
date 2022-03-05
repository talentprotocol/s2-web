import { useEffect, useMemo } from "react";
import { SidebarCopy as COPY } from "copy/sidebar";
import ButtonLink from "atomic/_atom/button-link";
import {
  ActionArea,
  Container,
  LinkList,
  LinkListItem,
  StyledLink,
} from "./styled";
import Gradient from "atomic/_static/gradient";
import { GradientType } from "atomic/_static/gradient/types";

interface Props {
  isSidebarVisible: boolean;
  isClosing: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({
  isSidebarVisible,
  isClosing,
  toggleSidebar,
}: Props) => {
  useEffect(() => {
    document.body.style.position = "fixed";
    return () => {
      document.body.style.position = "relative";
    };
  }, [isSidebarVisible]);
  const memoizedAnchors = useMemo(
    () =>
      COPY.links.map((link) => (
        <LinkListItem key={link.name}>
          <StyledLink href={link.href} target="blank">
            {link.name}
          </StyledLink>
        </LinkListItem>
      )),
    []
  );
  return (
    <Container
      className={`animate__animated ${
        !isClosing ? "animate__fadeInLeft" : "animate__fadeOutLeftBig"
      }`}
      onClick={toggleSidebar}
    >
      <Gradient type={GradientType.DEFAULT} />
      <LinkList>{memoizedAnchors}</LinkList>
      <ActionArea>
        <ButtonLink
          content={COPY.joinButton.content}
          type={COPY.joinButton.type}
          href={COPY.joinButton.href}
        />
        <ButtonLink
          content={COPY.signInButton.content}
          type={COPY.signInButton.type}
          href={COPY.signInButton.href}
        />
      </ActionArea>
    </Container>
  );
};

export default Sidebar;
