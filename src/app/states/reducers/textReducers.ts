import { ActionType } from "../action-type";
import { Action } from "../actions";

const initialValueState = "";

const textValueReducer = (
  state: String = initialValueState,
  action: Action
) => {
  switch (action.type) {
    case ActionType.UPDATE:
      return (state = action.payload);
    case ActionType.CLEAN:
      return (state = initialValueState);
    default:
      return state;
  }
};

export default textValueReducer;
