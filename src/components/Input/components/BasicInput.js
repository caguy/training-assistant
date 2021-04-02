import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import PropType from "prop-types";

import { ReactComponent as ArrowIcon } from "static/increase_icon.svg";

const BasicInput = ({
  value,
  onChange,
  onIncrement,
  onDecrement,
  width = "2em",
}) => {
  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        onIncrement();
        break;
      case "ArrowDown":
        e.preventDefault();
        onDecrement();
        break;
      default:
        return;
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={value}
        width={width}
      />
      <Controls>
        <ButtonContainer onClick={onIncrement}>
          <ArrowIcon style={{ width: "0.7em" }} />
        </ButtonContainer>
        <ReversedButtonContainer onClick={onDecrement}>
          <ArrowIcon style={{ width: "0.7em" }} />
        </ReversedButtonContainer>
      </Controls>
    </Wrapper>
  );
};

BasicInput.propTypes = {
  value: PropType.string.isRequired,
  onChange: PropType.func.isRequired,
  onIncrement: PropType.func.isRequired,
  onDecrement: PropType.func.isRequired,
  width: PropType.string,
};

const underlineStyle = css`
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
`;

const Wrapper = styled.div`
  position: relative;
  float: left;

  &::before {
    ${underlineStyle}
    background-color: ${({ theme }) => theme.color.mediumGrey};
  }

  &::after {
    ${underlineStyle}
    background-color: ${({ theme }) => theme.color.secondary};
    opacity: 0;
    transition: opacity 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    &::after {
      opacity: 1;
    }
  }
`;

const Input = styled.input`
  color: ${({ theme }) => theme.color.body};
  font-size: 1.75em;
  margin-right: 0.6em;
  text-align: center;
  border: none;
  background: none;
  width: ${({ width }) => width};
`;

const Controls = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;

const ButtonContainer = styled.button`
  cursor: pointer;
  display: block;
  background: none;
  border: none;
  padding: 0;

  &:hover {
    path {
      stroke: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const ReversedButtonContainer = styled(ButtonContainer)`
  transform: rotate(180deg);
`;

export default BasicInput;
