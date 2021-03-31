import { setValue, setTotal, addSegment, removeSegment } from "state/actions";
import {
  getOtherFieldType,
  getFieldValue,
  getAllValues
} from "state/selectors";
import { PACE, SPEED, DISTANCE, TIME } from "state/constants";
import {
  calculateDistance,
  calculateTime,
  convertSpeedToPace,
  calculateSpeed,
  convertPaceToSpeed,
  getNumericTime,
  getParsedTime
} from "utils";

export const dispatchSpeed = (segmentId, speed) => (dispatch, getState) => {
  const state = getState();
  const pinnedType = getOtherFieldType(state, segmentId, SPEED.type);

  dispatch(setValue(segmentId, SPEED.type, speed));
  const pace = convertSpeedToPace(speed);
  dispatch(setValue(segmentId, PACE.type, pace));

  if (pinnedType === TIME.type) {
    const currentTime = getFieldValue(state, segmentId, TIME.type);
    const distance = calculateDistance(speed, currentTime);
    dispatch(setValue(segmentId, DISTANCE.type, distance));
  } else if (pinnedType === DISTANCE.type) {
    const currentDistance = getFieldValue(state, segmentId, DISTANCE.type);
    const time = calculateTime(currentDistance, speed);
    dispatch(setValue(segmentId, TIME.type, time));
  }
  dispatch(dispatchTotal());
};

export const dispatchPace = (segmentId, pace) => (dispatch, getState) => {
  const state = getState();
  const pinnedType = getOtherFieldType(state, segmentId, PACE.type);

  dispatch(setValue(segmentId, PACE.type, pace));
  const speed = convertPaceToSpeed(pace);
  dispatch(setValue(segmentId, SPEED.type, speed));

  if (pinnedType === TIME.type) {
    const currentTime = getFieldValue(state, segmentId, TIME.type);
    const distance = calculateDistance(speed, currentTime);
    dispatch(setValue(segmentId, DISTANCE.type, distance));
  } else if (pinnedType === DISTANCE.type) {
    const currentDistance = getFieldValue(state, segmentId, DISTANCE.type);
    const time = calculateTime(currentDistance, speed);
    dispatch(setValue(segmentId, TIME.type, time));
  }
  dispatch(dispatchTotal());
};

export const dispatchDistance = (segmentId, distance) => (
  dispatch,
  getState
) => {
  const state = getState();
  const pinnedType = getOtherFieldType(state, segmentId, DISTANCE.type);

  dispatch(setValue(segmentId, DISTANCE.type, distance));

  if (pinnedType === SPEED.type || pinnedType === PACE.type) {
    const currentSpeed = getFieldValue(state, segmentId, SPEED.type);
    const time = calculateTime(distance, currentSpeed);
    dispatch(setValue(segmentId, TIME.type, time));
  } else if (pinnedType === TIME.type) {
    const currentTime = getFieldValue(state, segmentId, TIME.type);
    const speed = calculateSpeed(distance, currentTime);
    const pace = convertSpeedToPace(speed);
    dispatch(setValue(segmentId, SPEED.type, speed));
    dispatch(setValue(segmentId, PACE.type, pace));
  }
  dispatch(dispatchTotal());
};

export const dispatchTime = (segmentId, time) => (dispatch, getState) => {
  const state = getState();
  const pinnedType = getOtherFieldType(state, segmentId, TIME.type);

  dispatch(setValue(segmentId, TIME.type, time));

  if (pinnedType === SPEED.type || pinnedType === PACE.type) {
    const currentSpeed = getFieldValue(state, segmentId, SPEED.type);
    const distance = calculateDistance(currentSpeed, time);
    dispatch(setValue(segmentId, DISTANCE.type, distance));
  } else if (pinnedType === DISTANCE.type) {
    const currentDistance = getFieldValue(state, segmentId, DISTANCE.type);
    const speed = calculateSpeed(currentDistance, time);
    const pace = convertSpeedToPace(speed);
    dispatch(setValue(segmentId, SPEED.type, speed));
    dispatch(setValue(segmentId, PACE.type, pace));
  }
  dispatch(dispatchTotal());
};

const dispatchTotal = () => (dispatch, getState) => {
  const state = getState();
  const distances = getAllValues(state, DISTANCE.type);
  const parsedTimes = getAllValues(state, TIME.type);
  const numericTimes = parsedTimes.map((time) => getNumericTime(time));

  const totalDistance = distances.reduce((acc, val) => acc + val, null);
  const totalNumericTime = numericTimes.reduce((acc, val) => acc + val, null);
  const totalParsedTime = getParsedTime(totalNumericTime);
  const totalSpeed = calculateSpeed(totalDistance, totalParsedTime);
  const totalPace = convertSpeedToPace(totalSpeed);

  dispatch(setTotal(totalSpeed, totalPace, totalParsedTime, totalDistance));
};

export const dispatchNewSegment = () => (dispatch, getState) => {
  dispatch(addSegment());
  dispatch(dispatchTotal());
};

export const dispatchDeleteSegment = (segmentId) => (dispatch, getState) => {
  dispatch(removeSegment(segmentId));
  dispatch(dispatchTotal());
};
