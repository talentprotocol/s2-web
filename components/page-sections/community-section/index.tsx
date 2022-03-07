import Hero from "../../hero";
import HeroCopy from "../../hero-copy";
import { CommunitySection as COPY } from "copy/homepage";
import { GradientType } from "atomic/_static/gradient/types";
import nftCard2 from "atomic/_static/images/nft-card-02.png";
import ButtonLink from "atomic/_atom/button-link";
import discordLogo from "atomic/_static/images/discord-white.svg";
import {
  ContentContainer,
  JoinDiscordContainer,
  ImageContainer,
  StyledImage,
  DiscordIcon,
} from "./styled";
import { useRef } from "react";
import { useWasVisible } from "../../../utils/useWasVisible";

const CommunitySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const wasVisible = useWasVisible(ref, "0px");
  return (
    <Hero gradientType={GradientType.BOTTOM} isHidden={!wasVisible}>
      <HeroCopy
        className={
          wasVisible ? "animate__animated animate__fadeInUp" : ""
        }
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
      <ContentContainer
        ref={ref}
        className={
          wasVisible ? "animate__animated animate__fadeInRight" : ""
        }
      >
        <ImageContainer>
          <StyledImage src={nftCard2} alt="community" />
        </ImageContainer>
      </ContentContainer>
    </Hero>
  );
};

export default CommunitySection;
