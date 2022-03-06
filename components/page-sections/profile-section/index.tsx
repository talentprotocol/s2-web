import { ProfileSection as COPY } from "copy/homepage";
import ButtonLink from "atomic/_atom/button-link";
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
        <ButtonLink
          content={COPY.footer.button.content}
          type={COPY.footer.button.type}
          href={COPY.footer.button.href}
        />
      </SectionFooter>
    </InfoContainer>
  </Container>
);

export default ProfileSection;
