import {
  SET_INPUT_FIELD,
  SET_VALUE,
  SET_TOTAL,
  TOGGLE_FOLD,
  ADD_SEGMENT,
  REMOVE_SEGMENT,
  MOVE_SEGMENT,
  RENAME_SEGMENT,
} from "state/actionTypes";

export function setInputField(segmentId, oldField, newField) {
  return {
    type: SET_INPUT_FIELD,
    payload: {
      segmentId,
      oldField,
      newField,
    },
  };
}

export function setValue(segmentId, field, value) {
  return {
    type: SET_VALUE,
    payload: {
      segmentId,
      field,
      value,
    },
  };
}

export function setTotal(speed, pace, time, distance) {
  return {
    type: SET_TOTAL,
    payload: {
      speed,
      pace,
      time,
      distance,
    },
  };
}

export function toggleFold(segmentId) {
  return {
    type: TOGGLE_FOLD,
    payload: {
      segmentId,
    },
  };
}

export function addSegment() {
  return {
    type: ADD_SEGMENT,
    payload: {},
  };
}

export function removeSegment(segmentId) {
  return {
    type: REMOVE_SEGMENT,
    payload: {
      segmentId,
    },
  };
}

export function moveSegment(segmentId, direction) {
  return {
    type: MOVE_SEGMENT,
    payload: {
      segmentId,
      direction,
    },
  };
}

export function renameSegment(segmentId, name) {
  return {
    type: RENAME_SEGMENT,
    payload: {
      segmentId,
      name,
    },
  };
}
