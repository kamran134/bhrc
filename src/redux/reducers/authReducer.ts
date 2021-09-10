/* eslint-disable import/no-anonymous-default-export */
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT
} from '../actions/action-types';
import { AuthType } from '../actions/auth-actions';
import { IAuthenticate } from '../states/auth-state';

const initialState: IAuthenticate = {
    token: localStorage.getItem('bhrc.token') || undefined,
    isAuthenticated: localStorage.getItem('bhrc.token') ? true : false,
    user: undefined
}

export default function(state = initialState, action: AuthType) {
    const { type, payload } = action;
    switch (type) {
        case USER_LOADED:
            return {...state, isAuthenticated: true, user: payload }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('bhrc.token', payload.token);
            return {...state, token: payload.token, isAuthenticated: true }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('bhrc.token');
            return {...state, token: null, isAuthenticated: false, loading: true }
        case LOGOUT:
            localStorage.removeItem('bhrc.token');
            return {...state, token: null, isAuthenticated: false, loading: false, user: null }
        default:
            return state;
    }
}