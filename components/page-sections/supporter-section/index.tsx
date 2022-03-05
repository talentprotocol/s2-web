import { useRef } from "react";
import { useWasVisible } from "utils/useWasVisible";
import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { SupporterSection as COPY } from "copy/homepage";
import nftCard1 from "atomic/_static/images/nft-card-01.png";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
} from "./styled";

const SupporterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
    <Hero>
      <RowContainer ref={ref}>
        <HeroCopy
          className={
            wasVisible ? "animate__animated animate__fadeInUp" : ""
          }
          title={COPY.title}
          subTitle={COPY.subTitle}
          description={COPY.description}
        />
        <ContentContainer
          className={
            wasVisible ? "animate__animated animate__fadeInRight" : ""
          }
        >
          <StyledImage src={nftCard1} alt="notifications" />
        </ContentContainer>
      </RowContainer>
    </Hero>
  );
};

export default SupporterSection;
