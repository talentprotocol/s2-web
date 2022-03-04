import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 328px;
  margin: 80px 0 80px;
  @media (min-width: 768px) {
    z-index: 10;
    width: 80%;
  }
`;

export const Card = styled.div`
  width: 228px;
  height: 328px;
  border: none;

  @media (min-width: 768px) {
    width: 260px;
    height: 356px;
  }
`;
