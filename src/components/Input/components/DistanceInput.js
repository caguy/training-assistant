import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";

import { DISTANCE } from "state/constants";
import { getFieldValue } from "state/selectors";
import { dispatchDistance } from "state/middlewares";
import { BasicInput, StyledInputWrapper, StyledUnit } from ".";
import { useInput } from "components/Input/hooks";
import { stringifyDistance } from "utils";

const DistanceInput = ({ segmentId, value, dispatchValue }) => {
  const dispatchHandler = (typedValue) => {
    try {
      let distance = Number(typedValue);
      if (distance < 0 || !distance) distance = 0;
      dispatchValue(segmentId, distance);
    } catch (e) {
      return;
    }
  };

  const { displayedValue, onChange, onIncrement, onDecrement } = useInput({
    initialValue: stringifyDistance(value),
    dispatchHandler: dispatchHandler,
    nbDecimals: 2,
    maxValue: 99.99
  });

  return (
    <StyledInputWrapper>
      <BasicInput
        value={displayedValue}
        onChange={onChange}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        width="3.2em"
      />
      <StyledUnit>{DISTANCE.unit}</StyledUnit>
    </StyledInputWrapper>
  );
};

DistanceInput.propType = {
  segmentId: PropType.number.isRequired,
  value: PropType.number.isRequired,
  dispatchValue: PropType.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    value: getFieldValue(state, ownProps.segmentId, DISTANCE.type)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchValue: (segmentId, value) => {
      return dispatch(dispatchDistance(segmentId, value));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DistanceInput);
