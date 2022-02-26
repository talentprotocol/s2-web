import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { SupporterSection as COPY } from "copy/homepage";

const SupporterSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
  </Hero>
);

export default SupporterSection;
