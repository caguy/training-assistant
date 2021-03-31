import { SPEED, PACE, DISTANCE, TIME } from "state/constants";
import {
  getFieldValue,
  getOtherFieldType,
  getSegmentById,
  getSegmentIndex,
  getTotalField
} from "state/selectors";

const state = {
  segments: [
    {
      id: 0,
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
      [DISTANCE.type]: { value: 1000, unit: DISTANCE.unit }
    },
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
      [DISTANCE.type]: { value: 600, unit: DISTANCE.unit }
    }
  ],
  total: {
    [SPEED.type]: {
      value: 10,
      unit: SPEED.unit
    },
    [PACE.type]: {
      value: { min: 6, sec: 0 },
      unit: PACE.unit
    },
    [TIME.type]: { value: { h: 1, min: 0, sec: 0 }, unit: TIME.unit },
    [DISTANCE.type]: { value: 1000, unit: DISTANCE.unit }
  }
};

test("Get speed value of segment #0 is 10", () => {
  expect(getFieldValue(state, 0, SPEED.type)).toBe(10);
});

test("Get pace value of segment #0 is 6:00", () => {
  expect(getFieldValue(state, 0, PACE.type)).toEqual({ min: 6, sec: 0 });
});

test("Get time value of segment #0 is 1:00:00", () => {
  expect(getFieldValue(state, 0, TIME.type)).toEqual({ h: 1, min: 0, sec: 0 });
});

test("Get speed value of segment #0 is 10", () => {
  expect(getFieldValue(state, 0, DISTANCE.type)).toBe(1000);
});

test("Get speed value of segment #1 is 12", () => {
  expect(getFieldValue(state, 1, SPEED.type)).toBe(12);
});

test("Get speed value of segment #2 is NULL", () => {
  expect(getFieldValue(state, 2, DISTANCE.type)).toBeNull();
});

test("Get unknown value of segment #0 is NULL", () => {
  expect(getFieldValue(state, 0, "abc")).toBeNull();
});

test("Get other type of segment 0 from SPEED is TIME", () => {
  expect(getOtherFieldType(state, 0, SPEED.type)).toBe(TIME.type);
});

test("Get other type of segment 0 from TIME is SPEED", () => {
  expect(getOtherFieldType(state, 0, TIME.type)).toBe(SPEED.type);
});

test("Get other type of segment 1 from PACE is DISTANCE", () => {
  expect(getOtherFieldType(state, 1, PACE.type)).toBe(DISTANCE.type);
});

test("Get other type of segment 2 is NULL", () => {
  expect(getOtherFieldType(state, 2, PACE.type)).toBeNull();
});

test("Get other type of segment 0 from PACE is NULL", () => {
  expect(getOtherFieldType(state, 0, PACE.type)).toBeNull();
});

test("Get segment #0", () => {
  expect(getSegmentById(state, 0)).toEqual({
    id: 0,
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
    [DISTANCE.type]: { value: 1000, unit: DISTANCE.unit }
  });
});

test("Get segment #1", () => {
  expect(getSegmentById(state, 1)).toEqual({
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
    [DISTANCE.type]: { value: 600, unit: DISTANCE.unit }
  });
});

test("Get segment #2 is null", () => {
  expect(getSegmentById(state, 2)).toBeNull();
});

test("Get total speed", () => {
  expect(getTotalField(state, SPEED.type)).toEqual({ value: 10, unit: "km/h" });
});

test("Get total pace", () => {
  expect(getTotalField(state, PACE.type)).toEqual({
    value: { min: 6, sec: 0 },
    unit: "min/km"
  });
});

test("Get total time", () => {
  expect(getTotalField(state, TIME.type)).toEqual({
    value: { h: 1, min: 0, sec: 0 },
    unit: "hh:mm:ss"
  });
});

test("Get total distance", () => {
  expect(getTotalField(state, DISTANCE.type)).toEqual({
    value: 1000,
    unit: "km"
  });
});

test("Get index of segment id=1 is 1", () => {
  expect(getSegmentIndex(state, 1)).toBe(1);
});

test("Get index of unknown segment is null", () => {
  expect(getSegmentIndex(state, 2)).toBeNull();
});
