import styled from "styled-components";
import Image from "next/image";

export const RowContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 132px;
  }
`;

export const ContentContainer = styled.div`
  margin: 56px 0 0;
  flex-grow: 1;
`;

export const StyledImage = styled(Image)`
  width: 100%;
`;
