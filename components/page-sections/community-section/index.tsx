import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { CommunitySection as COPY } from "copy/homepage";
import profileImage from "atomic/_static/images/nft-card-02.png";
import ButtonLink from "atomic/_atom/button-link";
import discordLogo from "atomic/_static/images/discord-logo-temp.svg";
import {
  ContentContainer,
  JoinDiscordContainer,
  StyledImage,
  DiscordIcon,
} from "./styled";

const CommunitySection = () => (
  <Hero>
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    />
    <ContentContainer>
      <StyledImage src={profileImage} alt="talent protocol profile" />
    </ContentContainer>
    <JoinDiscordContainer>
      <ButtonLink content={COPY.footer.button}>
        <DiscordIcon src={discordLogo} alt="discord" />
      </ButtonLink>
    </JoinDiscordContainer>
  </Hero>
);

export default CommunitySection;
