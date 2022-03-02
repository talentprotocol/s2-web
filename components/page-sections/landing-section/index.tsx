import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import Slider from "../../slider";
import { LandingSection as COPY } from "copy/homepage";
import TextColorizer from "atomic/_atom/text-colorizer";
import ButtonLink from "atomic/_atom/button-link";
import { slidesData } from "./slides-data";
import {
  FocusedTitle,
  RowContainer,
  SliderContainer,
  SectionFooter,
  SectionFooterCopy,
} from "./styled";

const LandingSection = () => (
  <Hero>
    <RowContainer>
      <HeroCopy subTitle={COPY.subTitle}>
        <FocusedTitle>
          <TextColorizer content={COPY.label} />
        </FocusedTitle>
        <SectionFooter>
          <SectionFooterCopy>
            <TextColorizer content={COPY.footer.label} />
          </SectionFooterCopy>
          <ButtonLink content={COPY.footer.button} />
        </SectionFooter>
      </HeroCopy>
      <SliderContainer>
        <Slider slidesData={slidesData} />
      </SliderContainer>
    </RowContainer>
  </Hero>
);

export default LandingSection;
