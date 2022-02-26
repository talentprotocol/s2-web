import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { CommunitySection as COPY } from "copy/homepage";

const CommunitySection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
  </Hero>
);

export default CommunitySection;
