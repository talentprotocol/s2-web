import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { SuccessSection as COPY } from "copy/homepage";

const SuccessSection = () => (
  <Hero>
    <HeroCopy title={COPY.title} description={COPY.description} />
  </Hero>
);

export default SuccessSection;
