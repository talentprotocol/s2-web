import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { MarketingSection as COPY } from "copy/homepage";

const MarketingSection = () => (
  <Hero>
    <HeroCopy title={COPY.title} description={COPY.description} />
  </Hero>
);

export default MarketingSection;
