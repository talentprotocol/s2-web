import { useCallback, useEffect, useMemo } from "react";
import { SidebarCopy as COPY } from "copy/sidebar";
import ButtonLink from "atomic/_atom/button-link";
import {
  Container,
  LinkList,
  LinkListItem,
  StyledLink,
  ActionArea,
} from "./styled";

interface Props {
  setSidebarStatus: (A: boolean) => void;
  isSidebarVisible: boolean;
}

const Sidebar = ({ setSidebarStatus, isSidebarVisible }: Props) => {
  useEffect(() => {
    document.body.style.position = "fixed";
    return () => {
      console.log("here");
      document.body.style.position = "relative";
    };
  }, [isSidebarVisible]);
  const hideSidebar = useCallback(() => {
    setSidebarStatus(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const memoizedAnchors = useMemo(
    () =>
      COPY.links.map((link) => (
        <LinkListItem key={link.name}>
          <StyledLink>{link.name}</StyledLink>
        </LinkListItem>
      )),
    []
  );
  return (
    <Container onClick={hideSidebar}>
      <LinkList>{memoizedAnchors}</LinkList>
      <ActionArea>
        <ButtonLink
          content={COPY.joinButton.content}
          type={COPY.joinButton.type}
        />
        <ButtonLink
          content={COPY.signInButton.content}
          type={COPY.signInButton.type}
        />
      </ActionArea>
    </Container>
  );
};

export default Sidebar;
