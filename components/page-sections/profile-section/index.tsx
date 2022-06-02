import { ProfileSection as COPY } from "copy/homepage";
import ButtonLink from "atomic/_atom/button-link";
import { Type as ButtonType } from "atomic/_atom/button-link/types";

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
          type={ButtonType.SECONDARY}
          content={COPY.footer.button.text}
          href={COPY.footer.button.href}
        />
      </SectionFooter>
    </InfoContainer>
  </Container>
);

export default ProfileSection;
