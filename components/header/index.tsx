import { useMemo } from "react";
import dynamic from "next/dynamic";
import Sidebar from "components/sidebar";
import { useSidebar } from "components/sidebar/useSidebar";
import { useMediaQuery } from "utils/useMediaQuery";
import { LOGO_SIZE } from "atomic/_atom/logo/types";
import ButtonLink from "atomic/_atom/button-link";
import { Type as ButtonType } from "atomic/_atom/button-link/types";
import { HeaderCopy as COPY } from "copy/header";
import {
  ActionArea,
  HeaderContainer,
  LinkList,
  LinkListItem,
  LogoArea,
  MobileMenu,
  StyledLink,
} from "./styled";

const DynamicLogoNoSSR = dynamic(
  // @ts-ignore
  () => import("atomic/_atom/logo"),
  { ssr: false }
);

const Header = () => {
  const sidebarState = useSidebar();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const memoizedSidebar = useMemo(
    () => (
      <Sidebar
        isSidebarVisible={sidebarState.isSidebarVisible}
        isClosing={sidebarState.isClosing}
        toggleSidebar={sidebarState.toggleSidebar}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sidebarState.isClosing]
  );
  const memoizedLogo = useMemo(
    () => (
      <LogoArea>
        <DynamicLogoNoSSR
          size={isMobile ? LOGO_SIZE.DEFAULT : LOGO_SIZE.MEDIUM}
        />
      </LogoArea>
    ),
    [isMobile]
  );
  return (
    <>
      {sidebarState.isSidebarVisible && memoizedSidebar}
      <HeaderContainer>
        {memoizedLogo}
        <ActionArea>
          <MobileMenu
            onClick={sidebarState.toggleSidebar}
            isSidebarVisible={sidebarState.isSidebarVisible}
          />
          <LinkList>
            <LinkListItem>
              <StyledLink href={COPY.links[0].href} target="blank">
                {COPY.links[0].name}
              </StyledLink>
            </LinkListItem>
            <LinkListItem>
              <StyledLink href={COPY.links[1].href} target="blank">
                {COPY.links[1].name}
              </StyledLink>
            </LinkListItem>
            <LinkListItem>
              <ButtonLink
                type={ButtonType.SECONDARY}
                content={COPY.button.text}
                href={COPY.button.href}
              />
            </LinkListItem>
          </LinkList>
        </ActionArea>
      </HeaderContainer>
    </>
  );
};

export default Header;
