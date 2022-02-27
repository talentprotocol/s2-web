import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { WelcomeSection as COPY } from "copy/homepage";
import { SectionFooter } from "./styled";
import Button from "../../../atomic/_atom/button";
import { ContentContainer, StyledImage } from "./styled";
import rewardsImage from "atomic/_static/images/rewards.png";

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
