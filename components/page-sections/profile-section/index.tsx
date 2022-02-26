import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { ProfileSection as COPY } from "copy/homepage";

const ProfileSection = () => (
  <Hero>
    <HeroCopy title={COPY.title} description={COPY.description} />
  </Hero>
);

export default ProfileSection;
