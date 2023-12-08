import styled from "@emotion/styled";

const StyledSeparator = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.color.mediumGrey};
  font-size: 1.5em;
  padding: 0 0.25em;
  transform: translateY(-0.25em);
`;

export default StyledSeparator;
