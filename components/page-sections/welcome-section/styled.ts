import styled from "styled-components";
import Image from "next/image";

export const RowContainer = styled.div`
  z-index: 5;
  @media (min-width: 768px) {
    display: flex;
    gap: 144px;
    flex-direction: row-reverse;
  }
`;

export const SectionFooter = styled.div`
  padding-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ContentContainer = styled.div`
  margin: 56px 0 0;
  flex-grow: 1;
`;

export const StyledImage = styled(Image)``;
