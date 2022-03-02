import styled from "styled-components";
import Image from "next/image";

export const RowContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 146px;
  }
`;

export const ContentContainer = styled.div`
  margin: 56px 0 0;

  @media (min-width: 768px) {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
`;
