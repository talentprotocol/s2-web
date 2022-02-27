import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { SupportedBlockChainsSection as COPY } from "copy/homepage";
import { FooterLabel } from "./styled";

const SupportedBlockChainsSection = () => (
  <Hero>
    <HeroCopy subTitle={COPY.subTitle} />
    <FooterLabel>{COPY.footer.label}</FooterLabel>
  </Hero>
);

export default SupportedBlockChainsSection;
