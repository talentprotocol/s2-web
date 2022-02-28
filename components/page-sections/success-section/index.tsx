import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import notificationsImage from "atomic/_static/images/notifications.png";
import { SuccessSection as COPY } from "copy/homepage";
import { ContentContainer, StyledImage } from "./styled";

const SuccessSection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      description={COPY.description}
    ></HeroCopy>
    <ContentContainer>
      <StyledImage src={notificationsImage} alt="notifications" />
    </ContentContainer>
  </Hero>
);

export default SuccessSection;
