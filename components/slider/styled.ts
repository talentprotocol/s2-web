import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 328px;
  margin: 64px 0;
  padding: 0 40px;

  @media (min-width: 768px) {
    z-index: 10;
    padding: 0 80px;
    width: 80%;
  }
`;

export const Card = styled.div`
  width: 248px;

  @media (min-width: 768px) {
    width: 260px;
    height: 356px;
  }
`;
