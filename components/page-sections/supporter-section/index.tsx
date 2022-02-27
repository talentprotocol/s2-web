import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { SupporterSection as COPY } from "copy/homepage";
import { slidesData } from "./slides-data";
import Slider from "../../slider";

const SupporterSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
    <Slider slidesData={slidesData} />
  </Hero>
);

export default SupporterSection;
