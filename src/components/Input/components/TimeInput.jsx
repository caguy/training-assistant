import React from "react";
import PropType from "prop-types";
import { connect } from "react-redux";

import { BasicInput, StyledInputWrapper, StyledSeparator } from ".";
import { TIME } from "@/state/constants";
import { getFieldValue } from "@/state/selectors";
import { dispatchTime } from "@/state/middlewares";
import { useInput } from "@/components/Input/hooks";

const TimeInput = ({ segmentId, value, dispatchValue }) => {
  const dispatchHandler = (field) => (typedValue) => {
    try {
      const speedField = Number(typedValue);
      const speed = { ...value, [field]: speedField };
      dispatchValue(segmentId, speed);
    } catch (e) {
      return;
    }
  };

  const overflowHandler = (field) => (side) => {
    switch (side) {
      case "CEIL":
        if (field === "sec") {
          if (value.min < 59) {
            dispatchValue(segmentId, { ...value, min: value.min + 1, sec: 0 });
            minHandler.forceValue(String(value.min + 1).padStart(2, "0"));
            secHandler.forceValue("00");
          } else if (value.min === 59 && value.h < 99) {
            dispatchValue(segmentId, { h: value.h + 1, min: 0, sec: 0 });
            hHandler.forceValue(String(value.h + 1).padStart(2, "0"));
            minHandler.forceValue("00");
            secHandler.forceValue("00");
          }
        } else if (field === "min") {
          if (value.h < 99) {
            dispatchValue(segmentId, { ...value, h: value.h + 1, min: 0 });
            hHandler.forceValue(String(value.h + 1).padStart(2, "0"));
            minHandler.forceValue("00");
          }
        }
        break;
      case "FLOOR":
        if (field === "sec") {
          if (value.min > 0) {
            dispatchValue(segmentId, { ...value, min: value.min - 1, sec: 59 });
            minHandler.forceValue(String(value.min - 1).padStart(2, "0"));
            secHandler.forceValue("59");
          } else if (value.min === 0 && value.h > 0) {
            dispatchValue(segmentId, { h: value.h - 1, min: 59, sec: 59 });
            hHandler.forceValue(String(value.h - 1).padStart(2, "0"));
            minHandler.forceValue("59");
            secHandler.forceValue("59");
          }
        } else if (field === "min") {
          if (value.h > 0) {
            dispatchValue(segmentId, { ...value, h: value.h - 1, min: 59 });
            hHandler.forceValue(String(value.h - 1).padStart(2, "0"));
            minHandler.forceValue("59");
          }
        }
        break;
      default:
        return;
    }
  };

  const hHandler = useInput({
    initialValue: String(value.h),
    dispatchHandler: dispatchHandler("h"),
    nbDecimals: 0,
    maxValue: 99,
    padStart: 2,
  });
  const minHandler = useInput({
    initialValue: String(value.min),
    dispatchHandler: dispatchHandler("min"),
    overflowHandler: overflowHandler("min"),
    nbDecimals: 0,
    maxValue: 59,
    padStart: 2,
  });
  const secHandler = useInput({
    initialValue: String(value.sec),
    dispatchHandler: dispatchHandler("sec"),
    overflowHandler: overflowHandler("sec"),
    nbDecimals: 0,
    maxValue: 59,
    padStart: 2,
  });

  return (
    <StyledInputWrapper>
      <BasicInput
        value={hHandler.displayedValue}
        onChange={hHandler.onChange}
        onIncrement={hHandler.onIncrement}
        onDecrement={hHandler.onDecrement}
        width="1.2em"
      />
      <StyledSeparator>:</StyledSeparator>
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
    </StyledInputWrapper>
  );
};

TimeInput.propTypes = {
  segmentId: PropType.number.isRequired,
  value: PropType.exact({
    h: PropType.number,
    min: PropType.number,
    sec: PropType.number,
  }).isRequired,
  dispatchValue: PropType.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    value: getFieldValue(state, ownProps.segmentId, TIME.type),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchValue: (segmentId, value) =>
      dispatch(dispatchTime(segmentId, value)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TimeInput);
