import { ActionCreator } from "redux";
import { IError } from "../states";
import { ERROR, ErrorAction } from "../types";

export const _hasError: ActionCreator<ErrorAction> = (error: IError) => ({
    type: ERROR,
    payload: error
});