import styled from "styled-components";
import { fontDefault } from "atomic/_static/typography";
import { COLORS } from "atomic/_static/color-palette";

export const Container = styled.div`
  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (min-width: 768px) {
    margin-top: 56px;
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 468px;
`;

export const Title = styled.h5`
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 140%;
  color: ${COLORS.WHITE};
  margin: 0;
  padding: 0;
`;

export const Paragraph = styled.h5`
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 165%;
  color: ${COLORS.GREY};
  margin: 16px 0 0;
  padding: 0;
`;

export const SectionFooter = styled.section`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
