/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT, ERROR, REGISTER_STAGE
} from '../actions/action-types';
import { AuthType } from '../actions/auth-actions';
import { IAuthenticate } from '../states/auth-state';

const INITIAL_STATE: IAuthenticate = {
    token: localStorage.getItem('bhrc.token') || undefined,
    isAuthenticated: false,
    user: undefined,
    processStage: 0
}

export default function(state = INITIAL_STATE, action: AuthType) {
    const { type, user, token, stage } = action;
    switch (type) {
        case USER_LOADED:
            return {...state, isAuthenticated: true, user }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('bhrc.token', token);
            return {...state, token }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('bhrc.token');
            return {...state, token: undefined, isAuthenticated: false }
        case ERROR:
        case LOGOUT:
            localStorage.removeItem('bhrc.token');
            return {...state, token: undefined, isAuthenticated: false, user: undefined }
        case REGISTER_STAGE:
            return {...state, processStage: stage}
        default:
            return state;
    }
}