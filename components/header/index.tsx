import { useCallback, useMemo } from "react";
import {
  HeaderContainer,
  LogoArea,
  ActionArea,
  MobileMenu,
} from "./styled";
import Logo from "atomic/_atom/logo";

interface Props {
  setSidebarStatus: (A: boolean) => void;
  isSidebarVisible: boolean;
}

const Header = ({ setSidebarStatus, isSidebarVisible }: Props) => {
  const handleMenuClick = useCallback(() => {
    setSidebarStatus(!isSidebarVisible);
  }, [isSidebarVisible]);
  const memoizedLogo = useMemo(
    () => (
      <LogoArea>
        <Logo />
      </LogoArea>
    ),
    []
  );
  return (
    <HeaderContainer>
      {memoizedLogo}
      <ActionArea>
        <MobileMenu onClick={handleMenuClick} />
      </ActionArea>
    </HeaderContainer>
  );
};

export default Header;
