import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { WelcomeSection as COPY } from "copy/homepage";
import ButtonLink from "atomic/_atom/button-link";
import rewardsImage from "atomic/_static/images/rewards.png";
import { GradientType } from "atomic/_static/gradient/types";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
  SectionFooter,
} from "./styled";

const WelcomeSection = () => (
  <Hero gradientType={GradientType.DEFAULT}>
    <RowContainer>
      <HeroCopy
        title={COPY.title}
        subTitle={COPY.subTitle}
        description={COPY.description}
      >
        <SectionFooter>
          <ButtonLink
            content={COPY.footer.button.text}
            href={COPY.footer.button.href}
          />
        </SectionFooter>
      </HeroCopy>
      <ContentContainer>
        <StyledImage src={rewardsImage} alt="rewards" />
      </ContentContainer>
    </RowContainer>
  </Hero>
);

export default WelcomeSection;
