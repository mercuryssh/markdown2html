import { Dispatch } from "redux";
import { ActionType } from "../action-type";
import { Action } from "../actions";

export const updateText = (input: string) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.UPDATE,
      payload: input,
    });
  };
};

export const cleanText = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.CLEAN,
      payload: "",
    });
  };
};
