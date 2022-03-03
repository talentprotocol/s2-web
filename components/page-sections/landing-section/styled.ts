import styled from "styled-components";
import { fontDefault } from "atomic/_static/typography";

export const RowContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;

    article {
      max-width: 50%;
    }
  }
`;

export const SliderContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
  }
`;

export const FocusedTitle = styled.h1`
  margin: 0;
  padding: 16px 0 0;
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 120%;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
export const SectionFooter = styled.div`
  padding-top: 68px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SectionFooterCopy = styled.p`
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 185%;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 0 0 16px;
`;
