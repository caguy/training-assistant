import { combineReducers } from "redux";
import segments from "./segments";
import total from "./total";

export default combineReducers({
  segments,
  total
});
