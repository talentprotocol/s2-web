import styled from "styled-components";
import { COLORS } from "../../_static/color-palette";
import { fontDefault } from "../../_static/typography";

export const StyledButton = styled.button`
  padding: 12px 32px;
  outline: none;
  border: none;
  background: ${COLORS.PURPLE};
  color: ${COLORS.WHITE};
  font-family: ${fontDefault};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 165%;
  border-radius: 4px;
`;
