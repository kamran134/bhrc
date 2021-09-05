import { SET_ALERT, REMOVE_ALERT } from "../actions/action-types";

const initialState: any = [];

export default function(state = initialState, action: any) {
    const { type, payload } = action;
    switch (type) {
        case SET_ALERT:
            return [...state, payload];
        case REMOVE_ALERT:
            return state.filter((_alert: any) => _alert.id !== payload);
        default:
            return state;
    }
}