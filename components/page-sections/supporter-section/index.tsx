import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { SupporterSection as COPY } from "copy/homepage";
import nftCard1 from "atomic/_static/images/nft-card-01.png";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
} from "./styled";

const SupporterSection = () => (
  <Hero className="animate__animated animate__fadeInRight">
    <RowContainer>
      <HeroCopy
        title={COPY.title}
        subTitle={COPY.subTitle}
        description={COPY.description}
      />
      <ContentContainer>
        <StyledImage src={nftCard1} alt="notifications" />
      </ContentContainer>
    </RowContainer>
  </Hero>
);

export default SupporterSection;
