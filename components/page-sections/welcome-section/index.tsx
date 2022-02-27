import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { WelcomeSection as COPY } from "copy/homepage";
import ButtonLink from "atomic/_atom/button-link";
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
    >
      <SectionFooter>
        <ButtonLink content={COPY.footer.button} />
      </SectionFooter>
      <ContentContainer>
        <StyledImage src={rewardsImage} alt="rewards" />
      </ContentContainer>
    </HeroCopy>
  </Hero>
);

export default WelcomeSection;
