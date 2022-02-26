import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { TalentSection as COPY } from "copy/homepage";

const TalentSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
  </Hero>
);

export default TalentSection;
