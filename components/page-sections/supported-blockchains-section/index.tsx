import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import celoLogo from "atomic/_static/images/celo.svg";
import polygonLogo from "atomic/_static/images/polygon-live.svg";
import { SupportedBlockChainsSection as COPY } from "copy/homepage";
import {
  HorizontalContainer,
  StyledImage,
  ImageContainer,
  FooterLabel,
} from "./styled";

const SupportedBlockChainsSection = () => (
  <Hero className="animate__animated animate__fadeIn">
    <HeroCopy subTitle={COPY.subTitle} isStretched>
      <HorizontalContainer>
        <ImageContainer width="148px">
          <StyledImage src={celoLogo} alt="celo" />
        </ImageContainer>
        <ImageContainer width="182px">
          <StyledImage src={polygonLogo} alt="polygon" />
        </ImageContainer>
        <FooterLabel>{COPY.footer.label}</FooterLabel>
      </HorizontalContainer>
    </HeroCopy>
  </Hero>
);

export default SupportedBlockChainsSection;
