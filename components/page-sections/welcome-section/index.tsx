import { useRef } from "react";
import { useWasVisible } from "utils/useWasVisible";
import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { WelcomeSection as COPY } from "copy/homepage";
import Button from "atomic/_atom/button";
import rewardsImage from "atomic/_static/images/rewards.png";
import { GradientType } from "atomic/_static/gradient/types";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
  SectionFooter,
} from "./styled";

const WelcomeSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
    <Hero gradientType={GradientType.LEFT} isHidden={!wasVisible}>
      <RowContainer ref={ref}>
        <HeroCopy
          className={
            wasVisible ? "animate__animated animate__fadeInUp" : ""
          }
          title={COPY.title}
          subTitle={COPY.subTitle}
          description={COPY.description}
        >
          <SectionFooter>
            <Button
              content={COPY.footer.button.text}
              className="vrlps-trigger"
            />
          </SectionFooter>
        </HeroCopy>
        <ContentContainer
          className={
            wasVisible ? "animate__animated animate__fadeInLeft" : ""
          }
        >
          <StyledImage src={rewardsImage} alt="rewards" />
        </ContentContainer>
      </RowContainer>
    </Hero>
  );
};

export default WelcomeSection;
