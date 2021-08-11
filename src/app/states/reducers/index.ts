import { combineReducers } from "redux";
import textReducers from "./textReducers";

const reducers = combineReducers({
  text: textReducers,
});

export type State = ReturnType<typeof reducers>;
export default reducers;
