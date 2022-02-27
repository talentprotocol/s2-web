import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { CommunitySection as COPY } from "copy/homepage";
import { ContentContainer, StyledImage } from "./styled";
import profileImage from "atomic/_static/images/nft-card-02.png";

const CommunitySection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
    <ContentContainer>
      <StyledImage src={profileImage} alt="talent protocol profile" />
    </ContentContainer>
  </Hero>
);

export default CommunitySection;
