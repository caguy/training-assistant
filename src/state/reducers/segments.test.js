import { SPEED, TIME, PACE, DISTANCE } from "state/constants";
import {
  addSegment,
  moveSegment,
  removeSegment,
  setInputField,
  setValue,
  toggleFold
} from "state/actions";
import segments from "./segments";
import { cloneDeep } from "lodash";

const defaultSegment = {
  inputs: [SPEED.type, TIME.type],
  [SPEED.type]: {
    value: 10,
    unit: SPEED.unit
  },
  [PACE.type]: {
    value: { min: 6, sec: 0 },
    unit: PACE.unit
  },
  [TIME.type]: { value: { h: 1, min: 0, sec: 0 }, unit: TIME.unit },
  [DISTANCE.type]: { value: 10, unit: DISTANCE.unit },
  folded: false
};

let initialState, expectedResult;

beforeEach(() => {
  initialState = [
    { id: 0, ...defaultSegment },
    {
      id: 1,
      inputs: [PACE.type, DISTANCE.type],
      [SPEED.type]: {
        value: 12,
        unit: SPEED.unit
      },
      [PACE.type]: {
        value: { min: 5, sec: 0 },
        unit: PACE.unit
      },
      [TIME.type]: { value: { h: 0, min: 30, sec: 0 }, unit: TIME.unit },
      [DISTANCE.type]: { value: 600, unit: DISTANCE.unit },
      folded: false
    }
  ];

  expectedResult = cloneDeep(initialState);
});

test("First call to the reducer initializes the state", () => {
  expect(segments(undefined, {})).toEqual([{ id: 0, ...defaultSegment }]);
});

test("Change input field SPEED to PACE of segment #0", () => {
  const action = setInputField(0, SPEED.type, PACE.type);
  expectedResult[0].inputs[0] = PACE.type;
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change input field TIME to DISTANCE of segment #0", () => {
  const action = setInputField(0, TIME.type, DISTANCE.type);
  expectedResult[0].inputs[1] = DISTANCE.type;
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change input field DISTANCE to TIME of segment #1", () => {
  const action = setInputField(1, DISTANCE.type, TIME.type);
  expectedResult[1].inputs[1] = TIME.type;
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change unset input field makes no change", () => {
  const action = setInputField(0, PACE.type, TIME.type);
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change unset segment makes no change", () => {
  const action = setInputField(2, PACE.type, TIME.type);
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change SPEED value to 10.2 in segment #0", () => {
  const action = setValue(0, SPEED.type, 10.2);
  expectedResult[0][SPEED.type].value = 10.2;
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change PACE value to {min: 5, sec: 0} in segment #0", () => {
  const action = setValue(0, PACE.type, { min: 5, sec: 0 });
  expectedResult[0][PACE.type].value = { min: 5, sec: 0 };
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change TIME value to {h: 2, min: 5, sec: 1} in segment #1", () => {
  const action = setValue(1, TIME.type, { h: 2, min: 5, sec: 1 });
  expectedResult[1][TIME.type].value = { h: 2, min: 5, sec: 1 };
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change unknown field makes no change", () => {
  const action = setValue(1, "abc", { h: 2, min: 5, sec: 1 });
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Change unknown segment makes no change", () => {
  const action = setValue(2, TIME.type, { h: 2, min: 5, sec: 1 });
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Fold the first segment toggles the flag", () => {
  const action = toggleFold(0);
  expectedResult[0].folded = true;
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Unfold the second segment toggles the flag", () => {
  initialState[1].folded = true;
  const action = toggleFold(1);
  expectedResult[1].folded = false;
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Fold an unknown segment makes no change", () => {
  const action = toggleFold(2);
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Add a segment appends the default segment with id =1", () => {
  const initialState = segments(undefined, {});
  const action = addSegment();
  expect(segments(initialState, action)).toEqual([
    { id: 0, ...defaultSegment },
    { id: 1, ...defaultSegment }
  ]);
});

test("Remove the first segment deletes it from the store", () => {
  const action = removeSegment(0);
  expectedResult.shift();
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Remove an unknown segment makes no change", () => {
  const action = removeSegment(2);
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Move up the second segment inverts it with the first", () => {
  const action = moveSegment(1, "UP");
  expect(segments(initialState, action)).toEqual([
    expectedResult[1],
    expectedResult[0]
  ]);
});

test("Move up the first segment makes no change", () => {
  const action = moveSegment(0, "UP");
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Move down the first segment inverts it with the second", () => {
  const action = moveSegment(0, "DOWN");
  expect(segments(initialState, action)).toEqual([
    expectedResult[1],
    expectedResult[0]
  ]);
});

test("Move down the last segment makes no change", () => {
  const action = moveSegment(1, "DOWN");
  expect(segments(initialState, action)).toEqual(expectedResult);
});

test("Make a wrong move makes no change", () => {
  const action = moveSegment(1, "ABCD");
  expect(segments(initialState, action)).toEqual(expectedResult);
});
