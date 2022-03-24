import { ProfileSection as COPY } from "copy/homepage";
import ButtonLink from "atomic/_atom/button-link";
import Button from "atomic/_atom/button";

import {
  Container,
  SectionFooter,
  Title,
  Paragraph,
  InfoContainer,
} from "./styled";

const ProfileSection = () => (
  <Container>
    <InfoContainer>
      <Title>{COPY.title}</Title>
      <Paragraph>{COPY.description}</Paragraph>
      <SectionFooter>
        <Button
          content={COPY.footer.button.content}
          variant={COPY.footer.button.type}
          className="vrlps-trigger"
        />
      </SectionFooter>
    </InfoContainer>
  </Container>
);

export default ProfileSection;
