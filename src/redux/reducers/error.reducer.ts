import { ERROR, ErrorAction } from "../types";
import { IError } from "../states";

const INITIAL_STATE: IError = {
    error: undefined,
    errorType: undefined,
    message: undefined,
    reason: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: ErrorAction) {
    const { type } = action;
    switch(type) {
        case ERROR:
            return {...state, error: action.payload};
        default:
            return state;
    }
}