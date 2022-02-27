import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import discoverImage from "atomic/_static/images/discover.png";
import { MarketingSection as COPY } from "copy/homepage";
import {
  ContentContainer,
  ImageContainer,
  ImageRelativeContainer,
  StyledImage,
} from "./styled";

const MarketingSection = () => (
  <Hero>
    <HeroCopy title={COPY.title} description={COPY.description}>
      <ContentContainer>
        <ImageContainer>
          <ImageRelativeContainer>
            <StyledImage
              src={discoverImage}
              alt="discover mvp"
              priority
            />
          </ImageRelativeContainer>
        </ImageContainer>
      </ContentContainer>
    </HeroCopy>
  </Hero>
);

export default MarketingSection;
