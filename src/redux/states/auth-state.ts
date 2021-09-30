import { IUserInfo } from "../../models/user";
import { IError } from "./error-state";

export interface IAuth {
    identifier: string;
    password: string;
}

export interface ISignIn {
    token: string;
    userId: string;
    when: Date;
    error?: IError;
}

export interface IAuthenticate {
    token?: string;
    isAuthenticated: boolean;
    user?: IUserInfo;
    processStage: number;
}