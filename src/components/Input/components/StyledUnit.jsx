import styled from "@emotion/styled";
import { UnitStyle } from "@/styles";

export const StyledUnit = styled.span`
  display: inline-block;
  padding: 0 0 0.3em 0.75em;
  ${({ theme }) => UnitStyle(theme)}
`;

export default StyledUnit;
