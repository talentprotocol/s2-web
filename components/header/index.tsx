import {
  HeaderContainer,
  LogoArea,
  ActionArea,
  MobileMenu,
} from "./styled";
import Logo from "atomic/_atom/logo";

const Header = () => (
  <HeaderContainer>
    <LogoArea>
      <Logo />
    </LogoArea>
    <ActionArea>
      <MobileMenu />
    </ActionArea>
  </HeaderContainer>
);

export default Header;
