import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import celoLogo from "atomic/_static/images/celo.svg";
import polygonLogo from "atomic/_static/images/polygon.svg";
import { SupportedBlockChainsSection as COPY } from "copy/homepage";
import {
  HorizontalContainer,
  StyledImage,
  FooterLabel,
} from "./styled";

const SupportedBlockChainsSection = () => (
  <Hero className="animate__animated animate__fadeIn">
    <HeroCopy subTitle={COPY.subTitle}>
      <HorizontalContainer>
        <StyledImage src={celoLogo} alt="celo" />
        <StyledImage src={polygonLogo} alt="polygon" />
        <FooterLabel>{COPY.footer.label}</FooterLabel>
      </HorizontalContainer>
    </HeroCopy>
  </Hero>
);

export default SupportedBlockChainsSection;
