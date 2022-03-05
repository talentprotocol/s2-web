import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { CommunitySection as COPY } from "copy/homepage";
import { GradientType } from "atomic/_static/gradient/types";
import nftCard2 from "atomic/_static/images/nft-card-02.png";
import ButtonLink from "atomic/_atom/button-link";
import discordLogo from "atomic/_static/images/discord-logo-temp.svg";
import {
  ContentContainer,
  JoinDiscordContainer,
  StyledImage,
  DiscordIcon,
} from "./styled";

const CommunitySection = () => (
  <Hero
    gradientType={GradientType.RIGHT}
    className="animate__animated animate__fadeInRight"
  >
    <HeroCopy
      title={COPY.title}
      subTitle={COPY.subTitle}
      description={COPY.description}
    >
      <JoinDiscordContainer>
        <ButtonLink
          content={COPY.footer.button.text}
          href={COPY.footer.button.href}
        >
          <DiscordIcon priority src={discordLogo} alt="discord" />
        </ButtonLink>
      </JoinDiscordContainer>
    </HeroCopy>
    <ContentContainer>
      <StyledImage src={nftCard2} alt="community" />
    </ContentContainer>
  </Hero>
);

export default CommunitySection;
