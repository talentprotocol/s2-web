import styled from "styled-components";

export const Colorized = styled.span<{ color: string }>`
  ${({ color }) => `color: ${color};`}
`;
