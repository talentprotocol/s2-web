import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { WelcomeSection as COPY } from "copy/homepage";

const WelcomeSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
  </Hero>
);

export default WelcomeSection;
