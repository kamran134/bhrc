import { IProject, IUserInfo } from "../../models";
import { IError } from "./";

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
    userProjects?: IProject[];
    processStage: number;
}