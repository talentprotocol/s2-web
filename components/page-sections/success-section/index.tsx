import { useRef } from "react";
import { useWasVisible } from "utils/useWasVisible";
import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import notificationsImage from "atomic/_static/images/notifications.png";
import { SuccessSection as COPY } from "copy/homepage";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
} from "./styled";

const SuccessSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
    <Hero>
      <RowContainer ref={ref}>
        <HeroCopy
          title={COPY.title}
          description={COPY.description}
          className={
            wasVisible ? "animate__animated animate__fadeInUp" : ""
          }
        />
        <ContentContainer
          className={
            wasVisible ? "animate__animated animate__fadeInLeft" : ""
          }
        >
          <StyledImage src={notificationsImage} alt="notifications" />
        </ContentContainer>
      </RowContainer>
    </Hero>
  );
};

export default SuccessSection;
