import { SPEED, PACE, TIME, DISTANCE } from "@/state/constants";
import { SET_TOTAL } from "@/state/actionTypes";

const defaultState = {
  [SPEED.type]: {
    value: 10,
    unit: SPEED.unit,
  },
  [PACE.type]: {
    value: { min: 6, sec: 0 },
    unit: PACE.unit,
  },
  [TIME.type]: { value: { h: 1, min: 0, sec: 0 }, unit: TIME.unit },
  [DISTANCE.type]: { value: 10, unit: DISTANCE.unit },
};

export default function total(state = defaultState, action) {
  switch (action.type) {
    case SET_TOTAL:
      const newState = Object.assign({}, state);
      newState[SPEED.type].value = action.payload.speed;
      newState[PACE.type].value = Object.assign({}, action.payload.pace);
      newState[TIME.type].value = Object.assign({}, action.payload.time);
      newState[DISTANCE.type].value = action.payload.distance;
      return newState;
    default:
      return state;
  }
}
