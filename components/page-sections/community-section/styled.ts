import styled from "styled-components";
import Image from "next/image";

export const ContentContainer = styled.div`
  margin: 56px 40px;
  filter: drop-shadow(-8px -8px 48px rgba(0, 0, 0, 0.4));

  @media (min-width: 768px) {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export const ImageContainer = styled.div`
  @media (min-width: 768px) {
    width: 315px;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
`;

export const JoinDiscordContainer = styled.div`
  margin: 36px 0 0;
`;

export const DiscordIcon = styled(Image).attrs(() => ({
  width: "22px",
  height: "16px",
}))``;
