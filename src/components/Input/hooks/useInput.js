import { useState } from "react";
const useInput = ({
  initialValue = 0,
  dispatchHandler,
  nbDecimals = 0,
  maxValue = 99,
  padStart = 0, // Has effect only if nbDecimals = 0 (fills the displayed value with zeros)
  overflowHandler // If provided, this function is called when onIncrement is triggered and the value is at its max (sends arg "CEIL") or 0 (sends arg "FLOOR")
}) => {
  const padValue = (value) =>
    padStart ? String(value).padStart(padStart, "0") : value;

  const [displayedValue, setDisplayedValue] = useState(() =>
    padValue(initialValue)
  );

  const dispatch = (typedValue) => {
    const valueToDisplay = typedValue;
    setDisplayedValue(valueToDisplay);
    if (dispatchHandler instanceof Function) dispatchHandler(typedValue);
  };

  const onChange = (e) => {
    let typedValue = String(e.target.value).replaceAll(",", ".").trim();
    let parsedValue = parseFloat(typedValue);
    let separatorPosition = typedValue.indexOf(".");

    if (isNaN(+typedValue)) return;
    if (nbDecimals === 0 && separatorPosition >= 0) return;
    if (parsedValue > maxValue) return;
    if (separatorPosition >= 0) {
      if (nbDecimals === 0) return;
      if (separatorPosition < typedValue.length - (nbDecimals + 1)) return;
    }

    dispatch(typedValue);
  };

  const onIncrement = () => {
    const step = 1 / +`1${Array(nbDecimals + 1).join(0)}`;
    let nextValue = parseFloat(+displayedValue + step).toFixed(2);
    if (nextValue <= maxValue) {
      nextValue = parseFloat(nextValue).toFixed(nbDecimals);
      dispatch(padValue(nextValue));
    } else if (overflowHandler instanceof Function) {
      overflowHandler("CEIL");
    }
  };

  const onDecrement = () => {
    const step = 1 / +`1${Array(nbDecimals + 1).join(0)}`;
    let nextValue = +displayedValue - step;
    if (nextValue >= 0) {
      nextValue = parseFloat(nextValue).toFixed(nbDecimals);
      dispatch(padValue(nextValue));
    } else if (overflowHandler instanceof Function) {
      overflowHandler("FLOOR");
    }
  };

  const forceValue = (value) => {
    setDisplayedValue(value);
  };

  return {
    displayedValue: displayedValue,
    onChange: onChange,
    onIncrement: onIncrement,
    onDecrement: onDecrement,
    forceValue: forceValue
  };
};

export default useInput;
