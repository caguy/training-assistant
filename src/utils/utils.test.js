import {
  convertSpeedToPace,
  convertPaceToSpeed,
  stringifyPace,
  stringifySpeed,
  stringifyTime,
  stringifyDistance,
  calculateDistance,
  calculateTime,
  calculateSpeed
} from "./utils";

test("Converted 12.6 km/h to pace is 4:46/km", () => {
  expect(convertSpeedToPace(12.6)).toEqual({ min: 4, sec: 46 });
  expect(convertSpeedToPace("12.6")).toEqual({ min: 4, sec: 46 });
});

test("Converted invalid speed to pace is null", () => {
  expect(convertSpeedToPace()).toBeNull();
  expect(convertSpeedToPace(-4)).toBeNull();
  expect(convertSpeedToPace(0)).toBeNull();
});

test("Converted 5:30 min/km to speed is 10.91 km/h", () => {
  expect(Math.round(convertPaceToSpeed({ min: 5, sec: 30 }) * 100) / 100).toBe(
    10.91
  );
  expect(
    Math.round(convertPaceToSpeed({ min: "5", sec: 30 }) * 100) / 100
  ).toBe(10.91);
  expect(
    Math.round(convertPaceToSpeed({ min: "5", sec: "30" }) * 100) / 100
  ).toBe(10.91);
});

test("Converted invalid pace to speed is null", () => {
  expect(convertPaceToSpeed()).toBeNull();
  expect(convertPaceToSpeed("5:30")).toBeNull();
  expect(convertPaceToSpeed({ min: 6 })).toBeNull();
  expect(convertPaceToSpeed({ min: 5, sec: "abc" })).toBeNull();
  expect(convertPaceToSpeed({ min: 5.4, sec: 30 })).toBeNull();
  expect(convertPaceToSpeed({ min: -2, sec: 30 })).toBeNull();
  expect(convertPaceToSpeed({ min: 5, sec: 61 })).toBeNull();
  expect(convertPaceToSpeed({ min: 0, sec: 0 })).toBeNull();
});

test("Stringified valid pace is min:sec", () => {
  expect(stringifyPace({ min: 5, sec: 30 })).toBe("5:30");
  expect(stringifyPace({ min: "5", sec: "30" })).toBe("5:30");
  expect(stringifyPace({ min: 6, sec: "00" })).toBe("6:00");
  expect(stringifyPace({ min: 6, sec: 0 })).toBe("6:00");
});

test("Stringified invalid pace is --:--", () => {
  expect(stringifyPace()).toBe("--:--");
  expect(stringifyPace("5:30")).toBe("--:--");
  expect(stringifyPace({ min: 6 })).toBe("--:--");
  expect(stringifyPace({ min: 5, sec: "abc" })).toBe("--:--");
  expect(stringifyPace({ min: 5.4, sec: 30 })).toBe("--:--");
  expect(stringifyPace({ min: -2, sec: 30 })).toBe("--:--");
  expect(stringifyPace({ min: 5, sec: 61 })).toBe("--:--");
  expect(stringifyPace({ min: 0, sec: 0 })).toBe("--:--");
});

test("Stringified valid speed is XX.X", () => {
  expect(stringifySpeed(12.63)).toBe("12.6");
  expect(stringifySpeed("12.6")).toBe("12.6");
  expect(stringifySpeed("12.0")).toBe("12.0");
  expect(stringifySpeed("12.00")).toBe("12.0");
  expect(stringifySpeed(11)).toBe("11.0");
});

test("Stringified invalid speed is --.-", () => {
  expect(stringifySpeed()).toBe("--.-");
  expect(stringifySpeed(-4)).toBe("--.-");
  expect(stringifySpeed(0)).toBe("--.-");
});

test("Stringified valid time is hh:mm:ss", () => {
  expect(stringifyTime({ h: 0, min: 0, sec: 1 })).toBe("00:00:01");
  expect(stringifyTime({ h: 0, min: 0, sec: 59 })).toBe("00:00:59");
  expect(stringifyTime({ h: 0, min: 3, sec: 1 })).toBe("00:03:01");
  expect(stringifyTime({ h: 3, min: 12, sec: 0 })).toBe("03:12:00");
  expect(stringifyTime({ h: "0", min: "00", sec: "3" })).toBe("00:00:03");
});

test("Stringified invalid time is --:--:--", () => {
  expect(stringifyTime()).toBe("--:--:--");
  expect(stringifyTime("00:00:01")).toBe("--:--:--");
  expect(stringifyTime(360)).toBe("--:--:--");
  expect(stringifyTime({ min: 0, sec: 3 })).toBe("--:--:--");
  expect(stringifyTime({ h: "0", min: "abc", sec: "3" })).toBe("--:--:--");
  expect(stringifyTime({ h: 0, min: 0, sec: -1 })).toBe("--:--:--");
  expect(stringifyTime({ h: 0, min: 0, sec: 1.5 })).toBe("--:--:--");
  expect(stringifyTime({ h: 0, min: 0, sec: 0 })).toBe("--:--:--");
});

test("Stringified valid distance is XX.XX", () => {
  expect(stringifyDistance(0.6)).toBe("0.60");
  expect(stringifyDistance("0.6")).toBe("0.60");
  expect(stringifyDistance(1)).toBe("1.00");
  expect(stringifyDistance(1.12)).toBe("1.12");
  expect(stringifyDistance(1.123)).toBe("1.12");
  expect(stringifyDistance(1.1234)).toBe("1.12");
});

test("Stringified invalid distance is --.--", () => {
  expect(stringifyDistance()).toBe("--.--");
  expect(stringifyDistance(-4)).toBe("--.--");
  expect(stringifyDistance(0)).toBe("--.--");
});

test("Calculated distance crossed in 54 min 11 sec at 11.2 km/h is 10.114 km", () => {
  expect(calculateDistance(11.2, { h: 0, min: 54, sec: 11 })).toBe(10.114);
  expect(calculateDistance("11.2", { h: 0, min: "54", sec: 11 })).toBe(10.114);
});

test("Calculated distance from invalid time or speed is null", () => {
  expect(calculateDistance({ h: 0, min: 54, sec: 0 })).toBeNull();
  expect(calculateDistance(11.2)).toBeNull();
  expect(calculateDistance(-78, { h: 0, min: 54, sec: 0 })).toBeNull();
  expect(calculateDistance(45, { h: 0, min: 0, sec: 0 })).toBeNull();
  expect(calculateDistance(0, { h: 0, min: 1, sec: 0 })).toBeNull();
});

test("Calculated time spent to cross 15 km at 11.3 km/h is {h: 1, min: 19, sec: 39}", () => {
  expect(calculateTime(15, 11.3)).toEqual({ h: 1, min: 19, sec: 39 });
  expect(calculateTime("15", "11.3")).toEqual({ h: 1, min: 19, sec: 39 });
});

test("Calculated time from invalid distance or speed is null", () => {
  expect(calculateTime()).toBeNull();
  expect(calculateTime(4)).toBeNull();
  expect(calculateTime(15, -4)).toBeNull();
  expect(calculateTime("abc", 4)).toBeNull();
});

test("Calculated speed for 14.34km in 1h03min17sec is 13.6 km/h", () => {
  expect(
    Math.round(calculateSpeed(14.34, { h: 1, min: 3, sec: 17 }) * 10) / 10
  ).toBe(13.6);

  expect(
    Math.round(calculateSpeed("14.34", { h: "1", min: "3", sec: "17" }) * 10) /
      10
  ).toBe(13.6);
});

test("Calculated speed from invalid time or distance is null", () => {
  expect(calculateSpeed()).toBeNull();
  expect(calculateSpeed(13)).toBeNull();
  expect(calculateSpeed({ h: 1, min: 5, sec: 6 })).toBeNull();
  expect(calculateSpeed(-13, { h: 1, min: 5, sec: 6 })).toBeNull();
  expect(calculateSpeed(13, { h: "abc", min: 5, sec: 6 })).toBeNull();
  expect(calculateSpeed(0, { h: 1, min: 5, sec: 6 })).toBeNull();
  expect(calculateSpeed(13, { h: 0, min: 0, sec: 0 })).toBeNull();
});
