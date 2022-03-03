import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { ProfileSection as COPY } from "copy/homepage";
import ButtonLink from "atomic/_atom/button-link";
import { SectionFooter } from "./styled";

const ProfileSection = () => (
  <Hero>
    <HeroCopy title={COPY.title} description={COPY.description}>
      <SectionFooter>
        <ButtonLink
          content={COPY.footer.button.content}
          type={COPY.footer.button.type}
          href={COPY.footer.button.href}
          target="blank"
        />
      </SectionFooter>
    </HeroCopy>
  </Hero>
);

export default ProfileSection;
