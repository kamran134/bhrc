/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_FAIL,
    AUTH_SUCCESS,
    LOGOUT, ERROR, REGISTER_STAGE, AuthType, GET_USER_PROJECTS
} from '../types';
import { IAuthenticate } from '../states';

const INITIAL_STATE: IAuthenticate = {
    token: localStorage.getItem('bhrc.token') || undefined,
    isAuthenticated: false,
    user: undefined,
    processStage: 0,
    userProjects: []
}

export function authReducer(state = INITIAL_STATE, action: AuthType) {
    switch (action.type) {
        case USER_LOADED:
            return {...state, isAuthenticated: true, user: action.payload }
        case GET_USER_PROJECTS:
            return {...state, userProjects: action.payload }
        case REGISTER_SUCCESS:
        case AUTH_SUCCESS:
            localStorage.setItem('bhrc.token', action.payload);
            return {...state, token: action.payload }
        case REGISTER_FAIL:
        case AUTH_FAIL:
            localStorage.removeItem('bhrc.token');
            return {...state, token: undefined, isAuthenticated: false }
        case ERROR:
        case LOGOUT:
            localStorage.removeItem('bhrc.token');
            return {...state, token: undefined, isAuthenticated: false, user: undefined }
        case REGISTER_STAGE:
            return {...state, processStage: action.payload}
        default:
            return state;
    }
}