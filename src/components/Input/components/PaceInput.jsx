import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";

import { BasicInput, StyledInputWrapper, StyledSeparator, StyledUnit } from ".";
import { PACE } from "@/state/constants";
import { getFieldValue } from "@/state/selectors";
import { dispatchPace } from "@/state/middlewares";
import { useInput } from "@/components/Input/hooks";

const PaceInput = ({ segmentId, value, dispatchValue }) => {
  const dispatchHandler = (field) => (typedValue) => {
    try {
      const paceField = Number(typedValue);
      const pace = { ...value, [field]: paceField };
      dispatchValue(segmentId, pace);
    } catch (e) {
      return;
    }
  };

  const overflowHandler = (side) => {
    switch (side) {
      case "CEIL":
        if (value.min < 59) {
          dispatchValue(segmentId, { min: value.min + 1, sec: 0 });
          minHandler.forceValue(String(value.min + 1));
          secHandler.forceValue("00");
        }
        break;
      case "FLOOR":
        if (value.min > 0) {
          dispatchValue(segmentId, { min: value.min - 1, sec: 59 });
          minHandler.forceValue(String(value.min - 1));
          secHandler.forceValue("59");
        }
        break;
      default:
        return;
    }
  };

  const minHandler = useInput({
    initialValue: String(value.min),
    dispatchHandler: dispatchHandler("min"),
    nbDecimals: 0,
    maxValue: 59,
  });

  const secHandler = useInput({
    initialValue: String(value.sec),
    dispatchHandler: dispatchHandler("sec"),
    overflowHandler: overflowHandler,
    nbDecimals: 0,
    maxValue: 59,
    padStart: 2,
  });

  return (
    <StyledInputWrapper>
      <BasicInput
        value={minHandler.displayedValue}
        onChange={minHandler.onChange}
        onIncrement={minHandler.onIncrement}
        onDecrement={minHandler.onDecrement}
        width="1.2em"
      />
      <StyledSeparator>:</StyledSeparator>
      <BasicInput
        value={secHandler.displayedValue}
        onChange={secHandler.onChange}
        onIncrement={secHandler.onIncrement}
        onDecrement={secHandler.onDecrement}
        width="1.2em"
      />
      <StyledUnit>{PACE.unit}</StyledUnit>
    </StyledInputWrapper>
  );
};

PaceInput.propType = {
  segmentId: PropType.number.isRequired,
  value: PropType.exact({
    min: PropType.number,
    sec: PropType.number,
  }).isRequired,
  dispatchValue: PropType.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    value: getFieldValue(state, ownProps.segmentId, PACE.type),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchValue: (segmentId, value) =>
      dispatch(dispatchPace(segmentId, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PaceInput);
