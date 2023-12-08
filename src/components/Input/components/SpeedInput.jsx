import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";

import { SPEED } from "@/state/constants";
import { getFieldValue } from "@/state/selectors";
import { dispatchSpeed } from "@/state/middlewares";
import { stringifySpeed } from "@/utils";
import { useInput } from "@/components/Input/hooks";
import { BasicInput, StyledInputWrapper, StyledUnit } from ".";

const SpeedInput = ({ segmentId, value, dispatchValue }) => {
  const dispatchHandler = (typedValue) => {
    try {
      let speed = Number(typedValue);
      dispatchValue(segmentId, speed);
    } catch (e) {
      return;
    }
  };

  const { displayedValue, onChange, onIncrement, onDecrement } = useInput({
    initialValue: stringifySpeed(value),
    dispatchHandler: dispatchHandler,
    nbDecimals: 1,
    maxValue: 99.9,
  });

  return (
    <StyledInputWrapper>
      <BasicInput
        value={displayedValue}
        onChange={onChange}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        width="2em"
      />
      <StyledUnit>{SPEED.unit}</StyledUnit>
    </StyledInputWrapper>
  );
};

SpeedInput.propTypes = {
  segmentId: PropType.number.isRequired,
  value: PropType.number.isRequired,
  dispatchValue: PropType.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    value: getFieldValue(state, ownProps.segmentId, SPEED.type),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchValue: (segmentId, value) =>
      dispatch(dispatchSpeed(segmentId, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeedInput);
