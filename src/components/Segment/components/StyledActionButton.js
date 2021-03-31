import styled from "@emotion/styled";

const StyledActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.8em;
  height: 1.8em;
  border-radius: 0.9em;
  border: none;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 8px 1px ${({ theme }) => theme.color.mediumGrey};
  padding: 0;
  margin: 0 0 0.5em 0;
  opacity: 0;
  transform: scale(0.25);
  transition: opacity 120ms ease-in-out, transform 120ms ease-in-out;

  &:not([disabled]) {
    cursor: pointer;
  }

  &:hover:not([disabled]),
  &:focus {
    background-color: ${({ theme, hoverColor }) => theme.color[hoverColor]};
    transform: scale(1);
    opacity: 1;

    & line {
      stroke: ${({ theme, hoverStrokeColor }) => theme.color[hoverStrokeColor]};
    }

    & path {
      fill: ${({ theme, hoverStrokeColor }) => theme.color[hoverStrokeColor]};
    }
  }
`;

export default StyledActionButton;
