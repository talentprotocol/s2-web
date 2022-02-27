import styled from "styled-components";
import Image from "next/image";

export const ContentContainer = styled.div`
  margin: 56px 0 0;
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
