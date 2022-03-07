import { useRef } from "react";
import { useWasVisible } from "utils/useWasVisible";
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

const TalentSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
    <Hero gradientType={GradientType.RIGHT} isHidden={!wasVisible}>
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
          <StyledImage
            src={profileImage}
            alt="talent protocol profile"
          />
        </ContentContainer>
      </RowContainer>
    </Hero>
  );
};

export default TalentSection;
