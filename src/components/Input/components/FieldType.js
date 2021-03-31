import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SPEED, PACE, DISTANCE, TIME } from "state/constants";
import { setInputField } from "state/actions";
import { keyframes } from "@emotion/react";

const fieldLabelMap = {
  [SPEED.type]: SPEED.label,
  [PACE.type]: PACE.label,
  [TIME.type]: TIME.label,
  [DISTANCE.type]: DISTANCE.label
};

const FieldType = ({ segmentId, value, options, dispatchField }) => {
  const optionComponents = options.map((option) => {
    return (
      <option key={option} value={option}>
        {fieldLabelMap[option]}
      </option>
    );
  });

  const onChangeHandler = (e) => {
    dispatchField(segmentId, value, e.target.value);
  };

  return (
    <SelectContainer>
      <Select
        name={`field_type_${value.toLowerCase()}`}
        id={`field_type_${value.toLowerCase()}`}
        value={value}
        onChange={onChangeHandler}
      >
        {optionComponents}
      </Select>
    </SelectContainer>
  );
};

FieldType.propTypes = {
  segmentId: PropTypes.number.isRequired,
  value: PropTypes.oneOf([SPEED.type, PACE.type, TIME.type, DISTANCE.type])
    .isRequired,
  options: PropTypes.arrayOf(
    PropTypes.oneOf([SPEED.type, PACE.type, TIME.type, DISTANCE.type])
      .isRequired
  ),
  dispatchField: PropTypes.func.isRequired
};

const arrowAnimation = keyframes`
  0%{
    transform: translateY(0);
  } 40% {
    transform: translateY(3px);
  } 80% {
    transform: translateY(0);
  } 
`;

const SelectContainer = styled.div`
  position: relative;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    border: 1px solid ${({ theme }) => theme.color.mediumGrey};
    border-radius: 1.5em;
    background-color: ${({ theme }) => theme.color.lightGrey};
    z-index: 0;
    opacity: 0;
    transition: opacity 120ms ease-in-out;
  }

  &::after {
    content: "▾";
    position: absolute;
    display: block;
    color: ${({ theme }) => theme.color.secondary};
    right: 1.5em;
    top: 0.25em;
    font-size: 1.25em;
    transition: transform 200ms ease-in-out;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
    &::after {
      animation: ${arrowAnimation} 800ms ease-in-out infinite;
    }
  }
`;

const Select = styled.select`
  position: relative;
  display: block;
  font-size: 1.2em;
  color: ${({ theme }) => theme.color.body};
  line-height: 1.3;
  padding: 0.3em 1em 0.2em 1.5em;
  width: 100%;
  min-width: 8em;
  box-sizing: border-box;
  margin: 0;
  border: none;
  border-radius: 1em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background: none;
  cursor: pointer;
  z-index: 1;

  &::-ms-expand {
    display: none;
  }
`;

function mapDispatchToProps(dispatch) {
  return {
    dispatchField: (segmentId, field, value) => {
      dispatch(setInputField(segmentId, field, value));
    }
  };
}

export default connect(null, mapDispatchToProps)(FieldType);
