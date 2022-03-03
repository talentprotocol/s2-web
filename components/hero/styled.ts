import styled from "styled-components";

export const Container = styled.section`
  padding: 74px 40px;

  @media (max-width: 768px) {
    padding: 74px 24px 0;
  }

  @media (min-width: 768px) {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: center;
  }
`;
