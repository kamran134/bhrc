import { IAlert } from "../states";

// ALERT
export const SET_ALERT = "SET_ALERT";
export interface AlertAction {
    type: typeof SET_ALERT;
    payload: IAlert;
}

export type AlertTypes = {
    type: string;
    payload: IAlert;
    id: string;
}

export const REMOVE_ALERT = "REMOVE_ALERT";