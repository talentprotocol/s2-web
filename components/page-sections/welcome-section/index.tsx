import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { WelcomeSection as COPY } from "copy/homepage";
import Button from "atomic/_atom/button";
import rewardsImage from "atomic/_static/images/rewards.png";
import {
  ContentContainer,
  StyledImage,
  SectionFooter,
} from "./styled";

const WelcomeSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
    <SectionFooter>
      <Button content={COPY.footer.button} />
    </SectionFooter>
    <ContentContainer>
      <StyledImage src={rewardsImage} alt="talent protocol profile" />
    </ContentContainer>
  </Hero>
);

export default WelcomeSection;
