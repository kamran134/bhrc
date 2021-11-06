import { SET_ALERT, REMOVE_ALERT, AlertTypes } from "../types";
import { IAlert } from "../states";

const INITIAL_STATE: IAlert[] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export function alertReducer(state = INITIAL_STATE, action: AlertTypes) {
    const { type } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, action.payload];
        case REMOVE_ALERT:
            return state.filter((_alert: any) => _alert.id !== action.id);
        default:
            return state;
    }
}