import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers";
import { AlertType } from "../states";
import {v4 as uuid} from "uuid";
import { AlertAction, REMOVE_ALERT, SET_ALERT } from "../types";

const _setAlert: ActionCreator<AlertAction> = _alert => ({
    type: SET_ALERT,
    payload: _alert
});

const _removeAlert: ActionCreator<{type: typeof REMOVE_ALERT; id: string}> = (id: string) => ({
    type: REMOVE_ALERT,
    id
});

export const setAlert = (message: string, type: AlertType): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    const alertId: string = uuid();
    dispatch(_setAlert({id: alertId, type, message}));
    setTimeout(() => dispatch(_removeAlert(alertId)), 5000);
}