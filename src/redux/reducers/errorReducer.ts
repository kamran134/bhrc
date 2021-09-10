import { ERROR } from "../actions/action-types";
import { errorAction } from "../actions/error-actions";
import { IError } from "../states/error-state";

const INITIAL_STATE: IError = {
    error: undefined,
    errorType: undefined,
    message: undefined,
    reason: undefined
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function(state = INITIAL_STATE, action: errorAction) {
    const {type, error} = action;
    switch(type) {
        case ERROR:
            return error;
        default:
            return state;
    }
}