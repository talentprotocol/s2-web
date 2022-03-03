import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import notificationsImage from "atomic/_static/images/notifications.png";
import { SuccessSection as COPY } from "copy/homepage";
import {
  RowContainer,
  ContentContainer,
  StyledImage,
} from "./styled";

const SuccessSection = () => (
  <Hero>
    <RowContainer>
      <HeroCopy title={COPY.title} description={COPY.description} />
      <ContentContainer>
        <StyledImage src={notificationsImage} alt="notifications" />
      </ContentContainer>
    </RowContainer>
  </Hero>
);

export default SuccessSection;
