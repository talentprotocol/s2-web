import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import discoverImage from "atomic/_static/images/discover.png";
import { MarketingSection as COPY } from "copy/homepage";
import {
  Column,
  ContentContainer,
  ImageContainer,
  ImageRelativeContainer,
  StyledImage,
} from "./styled";

const MarketingSection = () => (
  <Hero className="animate__animated animate__fadeInUp">
    <Column>
      <HeroCopy
        title={COPY.title}
        description={COPY.description}
        isStretched
      />
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
    </Column>
  </Hero>
);

export default MarketingSection;
