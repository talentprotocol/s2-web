import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import profileImage from "atomic/_static/images/profile.png";
import { TalentSection as COPY } from "copy/homepage";
import {ContentContainer, StyledImage} from "./styled";

const TalentSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
      <ContentContainer>
          <StyledImage src={profileImage} alt="talent protocol profile"/>
      </ContentContainer>
  </Hero>
);

export default TalentSection;
