import { SPEED, TIME, PACE, DISTANCE } from "state/constants";
import {
  ADD_SEGMENT,
  REMOVE_SEGMENT,
  SET_INPUT_FIELD,
  SET_VALUE,
  TOGGLE_FOLD,
  MOVE_SEGMENT
} from "state/actionTypes";
import { cloneDeep } from "lodash";
import { getSegmentIndex } from "state/selectors";

let nextId;

const defaultSegment = {
  id: null,
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

const createSegment = () => {
  const newSegment = cloneDeep(defaultSegment);
  newSegment.id = nextId++;
  return newSegment;
};

export default function segments(state, action) {
  if (typeof state === "undefined") {
    nextId = 0;
    state = [createSegment()];
  }

  switch (action.type) {
    case SET_INPUT_FIELD:
      return state.map((currentSegment) => {
        if (currentSegment.id === action.payload.segmentId) {
          const newInputs = Array.from(currentSegment.inputs);
          if (newInputs[0] === action.payload.oldField) {
            newInputs[0] = action.payload.newField;
          } else if (newInputs[1] === action.payload.oldField) {
            newInputs[1] = action.payload.newField;
          }
          return Object.assign({}, currentSegment, {
            inputs: newInputs
          });
        }
        return currentSegment;
      });
    case SET_VALUE:
      return state.map((currentSegment) => {
        if (currentSegment.id === action.payload.segmentId) {
          if (typeof currentSegment[action.payload.field] !== "undefined")
            return Object.assign({}, currentSegment, {
              [action.payload.field]: Object.assign(
                {},
                currentSegment[action.payload.field],
                {
                  value: action.payload.value
                }
              )
            });
        }
        return currentSegment;
      });
    case TOGGLE_FOLD:
      return state.map((segment) => {
        if (segment.id === action.payload.segmentId) {
          return Object.assign({}, segment, { folded: !segment.folded });
        }
        return segment;
      });
    case ADD_SEGMENT:
      return [...state, createSegment()];
    case REMOVE_SEGMENT:
      return [...state].filter(
        (segment) => segment.id !== action.payload.segmentId
      );
    case MOVE_SEGMENT:
      const { direction, segmentId } = action.payload;
      const segmentIndex = getSegmentIndex({ segments: state }, segmentId);
      if (segmentIndex === null) return state;
      if (segmentIndex === 0 && direction === "UP") return state;
      if (segmentIndex >= state.length - 1 && direction === "DOWN")
        return state;
      const nextState = [...state];
      const segmentToMove = nextState.splice(segmentIndex, 1);
      const nextSegmentIndex =
        direction === "UP"
          ? segmentIndex - 1
          : direction === "DOWN"
          ? segmentIndex + 1
          : segmentIndex;
      nextState.splice(nextSegmentIndex, 0, ...segmentToMove);
      return nextState;
    default:
      return state;
  }
}
