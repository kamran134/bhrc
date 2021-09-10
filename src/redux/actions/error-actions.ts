import { ActionCreator } from "redux";
import { IError } from "../states/error-state";
import { ERROR } from "./action-types";

export interface errorAction {
    type: typeof ERROR;
    error: IError
}

export const _hasError: ActionCreator<errorAction> = (error: IError) => ({
    type: ERROR,
    error
});