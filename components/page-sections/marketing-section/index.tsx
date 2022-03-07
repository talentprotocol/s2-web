import {useRef} from "react";
import {useWasVisible} from "utils/useWasVisible";
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

const MarketingSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
      <Hero className="animate__animated animate__fadeInUp" isHidden={!wasVisible}>
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
                    unoptimized
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
}

export default MarketingSection;
