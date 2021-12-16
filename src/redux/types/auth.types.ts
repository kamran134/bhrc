import { IProfile, IProject, IUserInfo } from "../../models";
import { ErrorAction } from ".";

//AUTH
export const AUTH_SUCCESS = "LOGIN_SUCCESS";
export interface SingInAction {
    type: typeof AUTH_SUCCESS;
    payload: string;
}

export const AUTH_FAIL = "AUTH_FAIL";
export interface SignInFailAction {
    type: typeof AUTH_FAIL;
}

export const LOGOUT = "LOGOUT";
export interface SingOutAction {
    type: typeof LOGOUT;
}

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export interface SignUpAction {
    type: typeof REGISTER_SUCCESS,
    payload: string
}

export const REGISTER_FAIL = "REGISTER_FAIL";
export interface SignUpFailAction {
    type: typeof REGISTER_FAIL;
}

export const REGISTER_STAGE = "REGISTER_STAGE";
export interface ProcessStageAction {
    type: typeof REGISTER_STAGE;
    payload: number;
}

export const USER_LOADED = "USER_LOADED";
export interface GetProfileAction {
    type: typeof USER_LOADED;
    payload: IUserInfo;
}

export const GET_USER_PROJECTS = "GET_USER_PROJECTS";
export interface GetUserProjects {
    type: typeof GET_USER_PROJECTS;
    payload: IProject[]
}

export const TEST_REQUEST = "TEST_REQUEST";
export interface TestRequest {
    type: typeof TEST_REQUEST;
    payload: any;
}

export const UPDATE_PROFILE = "UPDATE_PROFILE";
export interface UpdateProfileAction {
    type: typeof UPDATE_PROFILE;
    payload: IProfile;
}

export type AuthType = 
    SingInAction |
    SignInFailAction |
    SingOutAction |
    SignUpAction |
    SignUpFailAction |
    GetProfileAction |
    ProcessStageAction |
    GetUserProjects |
    TestRequest |
    UpdateProfileAction |
    ErrorAction;