import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../reducers/rootReducer";
import { AlertType, IAlert } from "../states/alert-state";
import {v4 as uuid} from "uuid";
import { REMOVE_ALERT, SET_ALERT } from "./action-types";

interface AlertAction {
    type: typeof SET_ALERT;
    payload: IAlert;
}

const _setAlert: ActionCreator<AlertAction> = _alert => ({
    type: SET_ALERT,
    payload: _alert
});

const _removeAlert: ActionCreator<{type: typeof REMOVE_ALERT; id: string}> = (id: string) => ({
    type: REMOVE_ALERT,
    id
}) 

export const setAlert = (message: string, type: AlertType): ThunkAction<void, RootState, unknown, Action<string>> => dispatch => {
    console.log('auu');
    const alertId: string = uuid();
    dispatch(_setAlert({id: alertId, type, message}));
    setTimeout(() => dispatch(_removeAlert(alertId)), 5000);
}

export type AlertTypes = {
    type: string;
    payload: IAlert;
    id: string;
}