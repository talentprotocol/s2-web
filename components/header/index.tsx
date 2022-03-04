import { useCallback, useMemo } from "react";
import { useMediaQuery } from "utils/useMediaQuery";
import Logo from "atomic/_atom/logo";
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

interface Props {
  setSidebarStatus: (A: boolean) => void;
  isSidebarVisible: boolean;
}

const Header = ({ setSidebarStatus, isSidebarVisible }: Props) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const handleMenuClick = useCallback(() => {
    setSidebarStatus(!isSidebarVisible);
  }, [isSidebarVisible, setSidebarStatus]);
  const memoizedLogo = useMemo(
    () => (
      <LogoArea>
        <Logo
          size={isMobile ? LOGO_SIZE.DEFAULT : LOGO_SIZE.MEDIUM}
        />
      </LogoArea>
    ),
    [isMobile]
  );
  return (
    <HeaderContainer>
      {memoizedLogo}
      <ActionArea>
        <MobileMenu onClick={handleMenuClick} />
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
  );
};

export default Header;
