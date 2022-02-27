import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import discoverImage from "atomic/_static/images/discover.png";
import { MarketingSection as COPY } from "copy/homepage";
import {
  ContentContainer,
  ImageContainer,
  StyledImage,
} from "./styled";

const MarketingSection = () => (
  <Hero>
    <HeroCopy title={COPY.title} description={COPY.description}>
      <ContentContainer>
        <ImageContainer>
          <StyledImage src={discoverImage} alt="discover mvp" />
        </ImageContainer>
      </ContentContainer>
    </HeroCopy>
  </Hero>
);

export default MarketingSection;
