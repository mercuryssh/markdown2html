import { ActionType } from "../action-type";

interface UpdateAction {
  type: ActionType.UPDATE;
  payload: String;
}

interface CleanAction {
  type: ActionType.CLEAN;
  payload: String;
}

export type Action = UpdateAction | CleanAction;
