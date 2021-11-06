import { IError } from "../states";

// ERROR
export const ERROR = "ERROR";

export interface ErrorAction {
    type: typeof ERROR;
    payload: IError;
}