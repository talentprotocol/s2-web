import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import Slider from "../../slider";
import { LandingSection as COPY } from "copy/homepage";
import { GradientType } from "atomic/_static/gradient/types";
import TextColorizer from "atomic/_atom/text-colorizer";
import Button from "atomic/_atom/button";
import { slidesData } from "./slides-data";
import {
  FocusedTitle,
  RowContainer,
  SliderContainer,
  SectionFooter,
  SectionFooterCopy,
} from "./styled";

const LandingSection = () => (
  <Hero gradientType={GradientType.DEFAULT}>
    <RowContainer>
      <HeroCopy subTitle={COPY.subTitle}>
        <FocusedTitle>
          <TextColorizer content={COPY.label} />
        </FocusedTitle>
        <SectionFooter>
          <SectionFooterCopy>
            <TextColorizer content={COPY.footer.label} />
          </SectionFooterCopy>
          <Button
            content={COPY.footer.button.text}
            className="vrlps-trigger"
          />
        </SectionFooter>
      </HeroCopy>
      <SliderContainer>
        <Slider slidesData={slidesData} />
      </SliderContainer>
    </RowContainer>
  </Hero>
);

export default LandingSection;
