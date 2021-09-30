import { SET_ALERT, REMOVE_ALERT } from "../actions/action-types";
import { AlertTypes } from "../actions/alert-actions";
import { IAlert } from "../states/alert-state";

const INITIAL_STATE: IAlert[] = [];

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: AlertTypes) {
    const { type, payload, id } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter((_alert: any) => _alert.id !== id);
        default:
            return state;
    }
}