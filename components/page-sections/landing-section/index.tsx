import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import Slider from "../../slider";
import { LandingSection as COPY } from "copy/homepage";
import TextColorizer from "atomic/_atom/text-colorizer";
import Button from "atomic/_atom/button";
import { slidesData } from "./slides-data";
import {
  FocusedTitle,
  SectionFooter,
  SectionFooterCopy,
} from "./styled";

const LandingSection = () => (
  <Hero>
    <HeroCopy subTitle={COPY.subTitle}>
      <FocusedTitle>
        <TextColorizer content={COPY.label} />
      </FocusedTitle>
      <SectionFooter>
        <SectionFooterCopy>
          <TextColorizer content={COPY.footer.label} />
        </SectionFooterCopy>
        <Button content={COPY.footer.button} />
      </SectionFooter>
    </HeroCopy>
    <Slider slidesData={slidesData} />
  </Hero>
);

export default LandingSection;
