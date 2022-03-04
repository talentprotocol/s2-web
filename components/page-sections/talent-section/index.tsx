import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import profileImage from "atomic/_static/images/profile.png";
import { GradientType } from "atomic/_static/gradient/types";
import { TalentSection as COPY } from "copy/homepage";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
} from "./styled";

const TalentSection = () => (
  <Hero gradientType={GradientType.REVERSE_LEFT}>
    <RowContainer>
      <HeroCopy
        title={COPY.title}
        subTitle={COPY.subTitle}
        description={COPY.description}
      />
      <ContentContainer>
        <StyledImage
          src={profileImage}
          alt="talent protocol profile"
        />
      </ContentContainer>
    </RowContainer>
  </Hero>
);

export default TalentSection;
