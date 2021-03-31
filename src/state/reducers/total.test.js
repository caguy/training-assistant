import { SPEED, TIME, PACE, DISTANCE } from "state/constants";
import { setTotal } from "state/actions";
import total from "./total";

const state = {
  [SPEED.type]: {
    value: 10,
    unit: SPEED.unit
  },
  [PACE.type]: {
    value: { min: 6, sec: 0 },
    unit: PACE.unit
  },
  [TIME.type]: { value: { h: 1, min: 0, sec: 0 }, unit: TIME.unit },
  [DISTANCE.type]: { value: 10, unit: DISTANCE.unit }
};

test("Initialize total", () => {
  expect(total(undefined, {})).toEqual(state);
});

test("Change total", () => {
  const action = setTotal(
    12,
    { min: 10, sec: 0 },
    { h: 2, min: 0, sec: 30 },
    14
  );
  expect(total(state, action)).toEqual({
    [SPEED.type]: {
      value: 12,
      unit: SPEED.unit
    },
    [PACE.type]: {
      value: { min: 10, sec: 0 },
      unit: PACE.unit
    },
    [TIME.type]: { value: { h: 2, min: 0, sec: 30 }, unit: TIME.unit },
    [DISTANCE.type]: { value: 14, unit: DISTANCE.unit }
  });
});
